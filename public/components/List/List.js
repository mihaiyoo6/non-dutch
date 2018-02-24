'use strict';

import template from './List.njk';
import jokeTemplate from './partials/joke.njk';
import { handleArrayMaxLenght } from '../../js/utils';

export default class List {
	constructor(items = [], favorites = [], maxLength = 10) {
		this.items = items;
		this.favorites = handleArrayMaxLenght(favorites, maxLength);
		this.maxLength = maxLength;
	}

	render(parent) {
		return template.render({ items: this.items, favorites: this.favorites }, (err, result) => {
			parent.innerHTML = result;
			this.bindEvents(parent);
		});
	}

	bindEvents(parent) {
		parent.addEventListener('click', e => {
			const target = e.target;
			const jokeEl = target.classList.contains('js-joke') ? e.target : target.closest('.js-joke');
			const id = jokeEl.getAttribute('data-id');

			if (target.classList.contains('js-add-favorite')) {
				this.addFavorite(jokeEl, id);
			}
			if (target.classList.contains('js-remove')) {
				console.log('id', id);
				const joke = this.items.find(x => x.id == id);
				console.log(joke);
				jokeEl.parentElement.removeChild(jokeEl);
			}
		});
	}

	addFavorite(jokeEl, id) {
		const favoritesContainer = document.querySelector('.js-jokes-favorites');
		const favortieJoke = this.items.find(x => x.id == id);
		Object.assign(favortieJoke, { isFavortie: true });
		this.favorites.push(favortieJoke);
		jokeEl.parentElement.removeChild(jokeEl);
		if (this.favorites.length > this.maxLength) {
			const toRemoveJoke = this.favorites.shift();
			const toRemoveJokeEl = favoritesContainer.querySelector(`.js-joke[data-id="${toRemoveJoke.id}"]`);
			favoritesContainer.removeChild(toRemoveJokeEl);
		}
		favoritesContainer.innerHTML += jokeTemplate.render({ item: favortieJoke });
		localStorage.setItem('favorites', JSON.stringify(this.favorites));
	}
}