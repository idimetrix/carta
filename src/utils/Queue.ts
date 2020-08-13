import log from '~/log';

export default class Queue {
	public static async queue(list: any, num: number, callback: (item: any, idx: number) => any, message: string = '', sleep: number = 1): Promise<any> {
		list = list ? [].concat(list) : [];

		if (!list || !list.length) {
			return null;
		}

		const items: any[] = list.flat();

		if (!items || !items.length) {
			return [];
		}

		const count: number = items.length;

		let index: number = 0;
		let queued: number = 0;

		const result: any[] = [];

		return new Promise((resolve: (value?: any) => void, reject: (reason?: any) => void): void => {
			const combine = (arr: any): any[] => {
				if (count === 1) {
					return result[0];
				} else {
					const _result: any[] = [];

					for (let i: number = 0; i < list.length; i++) {
						if (Array.isArray(list[i])) {
							_result[i] = [];
							for (const item of list[i]) {
								log.debug('item', item);
								_result[i].push(result.shift());
							}
						} else {
							_result.push(result.shift());
						}
					}

					return _result;
				}
			};

			const run = (item: any): void => {
				const idx: number = index;

				index++;

				callback(item, idx)
					.then((args: any[]): void => {
						queued++;

						result[idx] = args;

						if (items && items.length) {
							const _item: any = items.shift();

							setTimeout((): void => run(_item), sleep);
						}

						if (queued === count) {
							resolve(combine(result));
						}
					})
					.catch((): void => {
						queued++;

						result[idx] = null;

						if (items && items.length) {
							const _item: any = items.shift();

							setTimeout((): void => run(_item), sleep);
						}

						if (queued === count) {
							resolve(combine(result));
						}
					});
			};

			for (let i: number = 0; i < Math.min(items.length, num); i++) {
				run(items.shift());
			}
		});
	}
}
