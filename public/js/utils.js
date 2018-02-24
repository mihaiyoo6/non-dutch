export function checkConsecutiveLetters(value, consecutiveIndex = 0) {
	if (consecutiveIndex >= 2) {
		return true;
	}
	if (value.length === 2) {
		if ((value.charCodeAt(0) + 1) === value.charCodeAt(1)) {
			consecutiveIndex += 1;
		} else {
			consecutiveIndex = 0;
		}
		return consecutiveIndex >= 2;
	} else if ((value.charCodeAt(0) + 1) === value.charCodeAt(1)) {
		consecutiveIndex += 1;
	} else {
		consecutiveIndex = 0;
	}
	return checkConsecutiveLetters(value.substring(1), consecutiveIndex);
}

export function parseTemplateString(template, map, fallback) {
	return template.replace(/\$\{.+?}/g, match => {
		const path = match.substr(2, match.length - 3).trim();
		return get(path, map, fallback);
	});
}


export function handleArrayMaxLenght(arr, maxLength) {
	const arrLength = arr.length;
	if (arrLength > maxLength) {
		return arr.splice(arrLength - maxLength);
	}
	return arr;
}

function get(path, obj, fb = `$\{${path}}`) {
	return path.split('.').reduce((res, key) => res[key] || fb, obj);
}
