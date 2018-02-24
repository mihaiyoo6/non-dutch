import { parseTemplateString } from './utils.js';

export default function loadJokes(url, limit) {
	return fetch(parseTemplateString(url, { limit }))
		.then(r => {
			if (!r.ok) {
				throw Error('No more jokes about Chuck Norris!');
			}
			return r.json();
		});
}
