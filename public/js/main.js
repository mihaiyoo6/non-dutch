'use strict';
import '../scss/style.scss';
import Login from '../components/Login/Login';
import List from '../components/List/List';
import { jokeUrl } from './constants.js';
import loadJokes from './loadJokes';
import errorTemplate from '../templates/error.njk';
import wellcomeTemplate from '../templates/wellcome-back.njk';
import jokeTemplate from '../components/List/partials/joke.njk';
import Store from './Store';
import initTabs from 'future-tabs';

const userNameStore = new Store('userName');
const isLoginStore = new Store('isLogin', false);
const favoritesStore = new Store('favorites');
const jokesStore = new Store('items', false);
const loginForm = new Login(showJokes, userNameStore, isLoginStore);

const appContainer = document.querySelector('#app');
const page1 = appContainer.querySelector('.page-1');
window.onload = function () {
	const container = appContainer.querySelector('.container');
	container.classList.remove('enter');

	if (loginForm.isLogin()) {
		page1.insertAdjacentHTML('beforeend', wellcomeTemplate.render({ userName: userNameStore.getAll() }));
		page1.addEventListener('click', showJokes);
	} else {
		const loginContainer = appContainer.querySelector('#login');
		loginForm.render(loginContainer);
	}
};

function showJokes() {
	const jokesContainer = appContainer.querySelector('.page-2');
	const jokesListContainer = jokesContainer.querySelector('#jokes-list');
	const favoritesListContainer = jokesContainer.querySelector('#favorites');
	const favorites = favoritesStore.getAll();
	const favoriteslist = new List('favorites', favorites, favoritesListContainer);
	const jokesList = new List('jokes', [], jokesListContainer);

	jokesList.render();
	favoriteslist.render();
	handleRandomJoke();
	handleLoadModeJokes(jokesList);
	initTabs('.tabs');
	bindEvents(jokesContainer, favoriteslist, jokesList);

	jokesContainer.classList.remove('hidden');
	page1.classList.add('exit');


	loadJokes(jokeUrl, 10)
		.then(jokesData => {
			if (jokesData.type !== 'success') {
				return jokesListContainer.innerHTML = errorTemplate.render();
			}
			jokesStore.set(jokesData.value);
			jokesList.addItems(jokesData.value);

		})
		.catch(() => {
			jokesListContainer.innerHTML = errorTemplate.render();
		});
}

function handleLoadModeJokes(jokesList) {
	const loadMoreBtn = document.querySelector('#loadMore');
	loadMoreBtn.addEventListener('click', () => {
		loadJokes(jokeUrl, 10).then(jokesData => {
			if (jokesData.type !== 'success') {
				return jokesContainer.innerHTML = errorTemplate.render();
			}
			jokesStore.insert(jokesData.value);
			jokesList.addItems(jokesData.value);
		});
	});
}

function handleRandomJoke() {
	const getRandomJokes = document.querySelector('#randomBtn');
	let interval = null;
	getRandomJokes.addEventListener('change', e => {
		const fetchRandomJoke = e.target.checked;
		if (fetchRandomJoke) {
			loadRandomJoke();
			interval = setInterval(loadRandomJoke, 5000);
		} else {
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
		return jokeTemplate.render(
			{
				item: Object.assign(item, { isRandom: true })
			},
			(err, result) => {
				randomContainer.insertAdjacentHTML('afterbegin', result);
			});
	});
}


function bindEvents(parent, favoriteslist, jokesList) {
	parent.addEventListener('click', e => {
		const target = e.target;
		const jokeEl = target.classList.contains('js-joke') ? e.target : target.closest('.js-joke');
		if (!jokeEl) {
			return;
		}
		const id = parseInt(jokeEl.getAttribute('data-id'));

		if (target.classList.contains('js-add-favorite')) {
			const item = jokesStore.remove(id);
			jokesList.removeItem(id);
			addFavorite(item, favoriteslist);
		}

		if (target.classList.contains('js-remove')) {
			favoriteslist.removeItem(id);
			favoritesStore.remove(id);
		}


		if (target.classList.contains('js-add-from-random')) {
			const item = {
				id,
				joke: jokeEl.getAttribute('data-text')
			};
			jokeEl.parentNode.removeChild(jokeEl);
			addFavorite(item, favoriteslist);
		}
	});
}

function addFavorite(item, favoriteslist) {
	if (favoritesStore.getAll().length >= 10) {
		const toRemoveItems = favoritesStore.setLength(10);
		favoriteslist.removeItems(toRemoveItems);
	}
	Object.assign(item, { isFavortie: true });
	favoritesStore.insert(item);
	favoriteslist.addItems([item]);
}