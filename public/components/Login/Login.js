'use strict';
import template from './Login.njk';
import hints from './partials/hints.njk';
import { checkConsecutiveLetters } from '../../js/utils';
import './Login.scss';

export default class Login {
	constructor(onSubmit) {
		this.userName = this.getUserName();
		this.password = '';
		this.htmlElemenets = [];
		this.onSubmit = onSubmit;
	}

	render(parent) {
		return template.render({ userName: this.userName }, (err, result) => {
			parent.innerHTML = result;
			this.bindEvents(parent);
		});
	}
	bindEvents(scope) {
		this.htmlElemenets.password = scope.querySelector('#password');
		this.htmlElemenets.userName = scope.querySelector('#name');
		this.htmlElemenets.loginBtn = scope.querySelector('#loginBtn');
		this.htmlElemenets.hints = scope.querySelector('#hints');

		this.htmlElemenets.password.addEventListener('input', e => {
			this.password = e.target.value;
			if (this.password.length !== 0) {
				this.validate();
				return;
			}
			this.htmlElemenets.hints.innerHTML = hints.render([]);
			this.htmlElemenets.loginBtn.disabled = true;

		});

		this.htmlElemenets.userName.addEventListener('input', e => {
			this.userName = e.target.value;
		});

		this.htmlElemenets.loginBtn.addEventListener('click', e => {
			e.preventDefault();
			this.setSession();
			this.setUserName();
			this.onSubmit();
		});
	}
	validate() {
		const errors = [];
		const messages = {
			letters: 'only lower letters',
			noSomeLetters: 'should not contain "i" "O" or "l"',
			double: 'should contain two overlapping letters, like "aa", "bb" or "cc"',
			consecutive: 'should contain 3 consecutive letters like "abc", "def" or "xyz"'
		};

		if (!(/^[a-z]+$/).test(this.password)) {
			console.log('only lower letters');
			errors.push({
				id: 'letters',
				mesage: messages.letters
			});
		}

		if (!(/([a-z])\1/i).test(this.password)) {
			console.log('should contain two overlapping letters, like "aa", "bb" or "cc"');
			errors.push({
				id: 'double',
				mesage: messages.double
			});
		}

		if (!(/^[^iOl]+$/).test(this.password)) {
			console.log('should not contain "i" "O" or "l"');
			errors.push({
				id: 'noSomeLetters',
				mesage: messages.noSomeLetters
			});
		}

		if (this.password.length >= 3) {
			if (!checkConsecutiveLetters(this.password)) {
				console.log('should contain 3 consecutive letters like "abc", "def" or "xyz"');
				errors.push({
					id: 'consecutive',
					mesage: messages.consecutive
				});
			}
		}

		this.htmlElemenets.hints.innerHTML = hints.render({ errors });
		this.htmlElemenets.loginBtn.disabled = errors.length !== 0;

	}
	setSession() {
		sessionStorage.setItem('isLogin', true);
	}
	setUserName() {
		localStorage.setItem('userName', this.userName);
	}
	getUserName() {
		return localStorage.getItem('userName');
	}
	isLogin() {
		return sessionStorage.getItem('isLogin');
	}
}