'use strict';
import '../scss/style.scss';
import helloTpl from '../templates/test.njk';

const html = helloTpl.render({ message: 'world'});
// eslint-disable-next-line no-console
console.log('hello world!', html);
document.querySelector('#app').insertAdjacentHTML('afterbegin', html);


