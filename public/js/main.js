'use strict';
import '../scss/style.scss';
import Login from '../components/Login/Login';

const loginForm = new Login();
if (loginForm.isLogin()) {
	document.querySelector('#app').insertAdjacentHTML('afterbegin', `<p>IS LOGIN: ${loginForm.getUserName()}</p>`);
} else {
	document.querySelector('#app').insertAdjacentHTML('afterbegin', loginForm.render());
	loginForm.bindEvents();
}
