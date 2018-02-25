'use strict';

import './List.scss';
import template from './List.njk';

export default class List {
	constructor(name, items = [], parent) {
		this.name = name;
		this.items = items;
		this.parent = parent;
	}

	render() {
		return template.render(
			{
				name: this.name,
				items: this.items,
			},
			(err, result) => {
				this.parent.innerHTML = result;
			});
	}

	// bindEvents(parent) {
	// 	parent.addEventListener('click', e => {
	// 		const target = e.target;
	// 		const jokeEl = target.classList.contains('js-joke') ? e.target : target.closest('.js-joke');
	// 		if (!jokeEl) {
	// 			return;
	// 		}
	// 		const id = parseInt(jokeEl.getAttribute('data-id'));

	// 		if (target.classList.contains('js-add-favorite')) {
	// 			const favortieJoke = this.items.find(x => x.id == id);
	// 			this.items = this.items.filter(x => x.id !== id);
	// 			jokeEl.parentElement.removeChild(jokeEl);
	// 			this.addFavorite(favortieJoke);
	// 		}
	// 		if (target.classList.contains('js-remove')) {
	// 			this.favorites = this.favorites.filter(x => x.id !== id);
	// 			jokeEl.parentElement.removeChild(jokeEl);
	// 			localStorage.setItem('favorites', JSON.stringify(this.favorites));
	// 			this.updateCount();
	// 		}
	// 	});
	// }

	// addItems(newItems) {
	// 	const favoritesIds = this.favorites.map(fav => fav.id);
	// 	const itemsIds = this.items.map(item => item.id);
	// 	this.items = this.items
	// 		.concat(newItems.filter(newItem => favoritesIds.indexOf(newItem.id) === -1)
	// 			.filter(newItem => itemsIds.indexOf(newItem.id) === -1)
	// 		);
	// 	this.render(document.querySelector('#list'));
	// }

	// addFavorite(favortieJoke) {
	// 	const favoritesContainer = document.querySelector('.js-jokes-favorites');
	// 	favortieJoke.isFavortie = true;
	// 	this.favorites.push(favortieJoke);
	// 	if (this.favorites.length > this.maxLength) {
	// 		const toRemoveJoke = this.favorites.shift();
	// 		const toRemoveJokeEl = favoritesContainer.querySelector(`.js-joke[data-id="${toRemoveJoke.id}"]`);
	// 		favoritesContainer.removeChild(toRemoveJokeEl);
	// 	}
	// 	favoritesContainer.innerHTML += jokeTemplate.render({ item: favortieJoke });
	// 	localStorage.setItem('favorites', JSON.stringify(this.favorites));
	// 	// this.updateCount();
	// }
	// updateCount() {
	// 	const count = document.querySelector('#count');
	// 	count.innerHTML = `${this.favorites.length} / ${this.maxLength}`;
	// }


}