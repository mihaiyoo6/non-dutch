'use strict';
import '../scss/style.scss';
import Login from '../components/Login/Login';
import List from '../components/List/List';
import { jokeUrl } from './constants.js';
import loadJockes from './loadJokes';
import errorTemplate from '../templates/error.njk';

const loginForm = new Login(showJokes);
const appContainer = document.querySelector('#app');

if (loginForm.isLogin()) {
	showJokes();
} else {
	const loginContainer = appContainer.querySelector('#login');
	loginForm.render(loginContainer);
}

function showJokes() {
	const jockesContainer = appContainer.querySelector('#jokes');
	const jockesListContainer = jockesContainer.querySelector('#list');

	loadJockes(jokeUrl, 10)
		.then(jockesData => {
			if (jockesData.type !== 'success') {
				return jockesContainer.innerHTML = errorTemplate.render();
			}
			const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
			const jockesList = new List(jockesData.value, favorites);
			jockesList.render(jockesListContainer);
		})
		.catch(() => {
			jockesContainer.innerHTML = errorTemplate.render();
		});
}