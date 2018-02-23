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