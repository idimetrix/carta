import { md5 } from '~/utils';

const version: string = '1';

enum DRIVER {
	STORAGE,
	COOKIE,
	MEMORY,
}

export default class Cache {
	public static _instance: Cache | null = null;

	public static get instance(): Cache {
		if (!Cache._instance) {
			Cache._instance = new Cache();
		}

		return Cache._instance;
	}
	private cache: any = {};

	private driver: DRIVER = DRIVER.STORAGE;

	private keys: any = { version: 'version', time: 'time', cache: 'cache' };

	public constructor(expire: number = 1000 * 60 * 60 * 24) {
		switch (this.driver) {
			case DRIVER.STORAGE:
				const storeVersion: string = localStorage.getItem(this.keys.version);
				const storeTime: number = parseInt(localStorage.getItem(this.keys.time), 10);

				if (!storeVersion || storeVersion !== version || !storeTime || new Date().getTime() - storeTime > expire) {
					// LocalStorage.clear();
				} else {
					try {
						this.cache = JSON.parse(localStorage.getItem(this.keys.cache) as string) || {};
					} catch {
						// Shallow error here
					}
				}
				break;

			case DRIVER.COOKIE:
				break;

			case DRIVER.MEMORY:
		}
	}

	public clear(): any {
		Object.keys(this.cache).forEach((key: string): boolean => delete this.cache[key]);
		this.store();
	}

	public delete(key: any): any {
		key = this.key(key);

		const data: any = this.cache[key];

		delete this.cache[key];

		this.store();

		return data;
	}

	public get(key: any): any {
		key = this.key(key);

		return this.has(key) ? this.cache[key].value : null;
	}

	public has(key: any): any {
		this.update();

		key = this.key(key);

		return !!this.cache[key] && !!this.cache[key].value;
	}

	public key(key: any): string {
		return typeof key === 'string' ? key : md5(JSON.stringify(key));
	}

	public marker(name: any, value: any = null): any {
		for (const key1 of Object.keys(this.cache)) {
			for (const key2 of Object.keys(this.cache[key1].key)) {
				if (name === key2 && value && value.indexOf(this.cache[key1].key[key2]) !== -1) {
					delete this.cache[key1];

					break;
				}
			}
		}

		this.store();
	}

	public set(key: any, value: any, expire: number = 1000 * 60 * 1000): any {
		this.update();

		this.cache[this.key(key)] = { value, key, expire: new Date().getTime() + expire };

		this.store();

		return value;
	}

	public store(): void {
		switch (this.driver) {
			case DRIVER.STORAGE:
				localStorage.setItem(this.keys.cache, JSON.stringify(this.cache));
				localStorage.setItem(this.keys.version, version);
				localStorage.setItem(this.keys.time, new Date().getTime() + '');
				break;

			case DRIVER.COOKIE:
				break;

			case DRIVER.MEMORY:
		}
	}

	public update(): void {
		const time: number = new Date().getTime();

		Object.keys(this.cache).forEach((key: string): void => {
			if (this.cache[key].expire < time) {
				delete this.cache[key];
			}
		});

		this.store();
	}
}
