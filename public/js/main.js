'use strict';
import '../scss/style.scss';
import Login from '../components/Login/Login';
import List from '../components/List/List';
import { jokeUrl } from './constants.js';
import loadJokes from './loadJokes';
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
	const jokesContainer = appContainer.querySelector('#jokes');
	const jokesListContainer = jokesContainer.querySelector('#list');

	loadJokes(jokeUrl, 10)
		.then(jokesData => {
			if (jokesData.type !== 'success') {
				return jokesContainer.innerHTML = errorTemplate.render();
			}
			const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
			const jokesList = new List(jokesData.value, favorites);
			jokesList.render(jokesListContainer);
			handleLoadModeJokes(jokesList);
		})
		.catch(() => {
			jokesContainer.innerHTML = errorTemplate.render();
		});
}

function handleLoadModeJokes(jokesList) {
	const loadMoreBtn = document.querySelector('#loadMore');
	loadMoreBtn.addEventListener('click', () => {
		loadJokes(jokeUrl, 10).then(jokesData => {
			if (jokesData.type !== 'success') {
				return jokesContainer.innerHTML = errorTemplate.render();
			}
			jokesList.addItems(jokesData.value);
		});
	});
}