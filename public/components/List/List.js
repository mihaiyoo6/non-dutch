'use strict';

import './List.scss';
import template from './List.njk';
import jokeTemplate from './partials/joke.njk';

export default class List {
	constructor(name, items = [], parent) {
		this.name = name;
		this.items = items;
		this.parent = parent;
		this.noJokesContainer = null;
	}

	render() {
		return template.render(
			{
				name: this.name,
				items: this.items,
			},
			(err, result) => {
				this.parent.innerHTML = result;
				this.noJokesContainer = this.parent.querySelector('.js-no-jokes-container');
			});
	}

	addItems(newItems) {
		let html = '';
		newItems.forEach(item => html += jokeTemplate.render({ item }));
		this.parent.insertAdjacentHTML('beforeend', html);
		if (this.noJokesContainer) {
			this.noJokesContainer.style.display = 'none';
		}
	}

	removeItems(items) {
		items.forEach(item => this.removeItem(item.id));
	}

	removeItem(id) {
		const elToRemove = this.parent.querySelector(`.js-joke[data-id="${id}"]`);
		elToRemove.parentNode.removeChild(elToRemove);
		if (!this.parent.querySelector('.js-joke')) {
			this.noJokesContainer.style.display = 'block';
		}
	}
}
