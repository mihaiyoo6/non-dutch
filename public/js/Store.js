export default class Store {
	constructor(name, permanent = true, callBack) {

		const storage = permanent ? localStorage : sessionStorage;

		this.getStorage = () => JSON.parse(storage.getItem(name) || '[]');

		this.setStorage = data => storage.setItem(name, JSON.stringify(data));

		if (callBack) {
			callBack();
		}
	}
	set(value) {
		this.setStorage(value);
	}

	insert(item, callBack) {
		const items = this.getStorage();
		items.push(item);
		this.setStorage(items);
		if (callBack) {
			callBack();
		}
	}

	remove() {
		console.log('remove');
	}
	getAll() {
		return this.getStorage(this.name);
	}
}