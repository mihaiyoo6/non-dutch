'use strict';
import '../scss/style.scss';
import Login from '../components/Login/Login';
import List from '../components/List/List';
import { jokeUrl } from './constants.js';
import loadJokes from './loadJokes';
import errorTemplate from '../templates/error.njk';
import jokeTemplate from '../components/List/partials/joke.njk';

const loginForm = new Login(showJokes);
const appContainer = document.querySelector('#app');

window.onload = function () {
	const container = appContainer.querySelector('.container');
	container.classList.remove('enter');
	if (loginForm.isLogin()) {
		showJokes();
	} else {
		const loginContainer = appContainer.querySelector('#login');
		loginForm.render(loginContainer);
	}
};

function showJokes() {
	const jokesContainer = appContainer.querySelector('#jokes');
	const jokesListContainer = jokesContainer.querySelector('#list');

	loadJokes(jokeUrl, 10)
		.then(jokesData => {
			if (jokesData.type !== 'success') {
				return jokesContainer.innerHTML = errorTemplate.render();
			}
			const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
			const jokesList = new List(jokesData.value, favorites, jokesListContainer);
			jokesList.render();
			jokesContainer.style.display = 'block';
			handleLoadModeJokes(jokesList);
			handleRandomJoke(jokesList);
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

function handleRandomJoke(jokesList) {
	const getRandomJokes = document.querySelector('#randomBtn');
	let interval = null;
	const randomContainer = document.querySelector('#random');
	randomContainer.addEventListener('click', e => {
		const target = e.target;
		const jokeEl = target.classList.contains('js-joke') ? e.target : target.closest('.js-joke');
		if (target.classList.contains('js-add-favorite')) {
			const item = {
				id: parseInt(jokeEl.getAttribute('data-id')),
				joke: jokeEl.getAttribute('data-text')
			};
			console.log('item', item);
			jokesList.addFavorite(item);
		}
	});
	getRandomJokes.addEventListener('change', e => {
		const fetchRandomJoke = e.target.checked;
		if (fetchRandomJoke) {
			loadRandomJoke();
			interval = setInterval(loadRandomJoke, 5000);
		} else {
			document.querySelector('#random').innerHTML = '';
			clearInterval(interval);
		}
	});
}

function loadRandomJoke() {
	return loadJokes(jokeUrl, 1).then(jokeData => {
		const randomContainer = document.querySelector('#random');
		if (jokeData.type !== 'success') {
			return randomContainer.innerHTML = errorTemplate.render();
		}
		const item = jokeData.value[0];
		return jokeTemplate.render({ item }, (err, result) => {
			console.log('addTOFavorites');
			randomContainer.innerHTML = result;
		});
	});
}