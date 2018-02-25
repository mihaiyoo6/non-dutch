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
		if (Array.isArray(item)) {
			item.forEach(x => items.push(x));
		} else {
			items.push(item);
		}
		this.setStorage(items);

		if (callBack) {
			callBack();
		}
	}

	getAll() {
		return this.getStorage();
	}

	find(id) {
		const items = this.getStorage();
		return items.find(item => item.id == id);
	}

	remove(id) {
		const items = this.getStorage();
		const removedItem = items.find(item => item.id === id);
		this.setStorage(items.filter(item => item.id !== id));
		return removedItem;
	}

	setLength(maxLength) {
		const items = this.getStorage();
		const remainItems = items.splice(items.length - maxLength + 1);
		this.set(remainItems);
		return items;

	}
}