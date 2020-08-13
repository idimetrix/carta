const loops: any[] = [];
const progresses: any[] = [];
const delays: any[] = [];

let id: number = 1;

class Twist {
	public static looping: boolean = true;
	public static delaying: boolean = true;
	public static progresses: boolean = true;

	public static progress(fn: (...args: any[]) => any, time: number, name: string | null = null): number {
		id++;

		progresses.push({ id, fn, time, name, timestamp: +new Date() });

		return id;
	}

	public static loop(fn: (...args: any[]) => any, time: number, name: string | null = null): number {
		id++;

		loops.push({ id, fn, time, name, timestamp: +new Date() });

		return id;
	}

	public static delay(fn: (...args: any[]) => any, time: number, name: string | null = null): number {
		id++;

		delays.push({ id, fn, time, name, timestamp: +new Date() });

		return id;
	}

	public static destroy(key: number | string): void {
		let it: number;

		for (it = 0; it < loops.length; it++) {
			const loop: any = loops[it];
			if (loop.id === key || loop.name === key) {
				loop.fn = null;
				loops.splice(it, 1);
			}
		}

		for (it = 0; it < progresses.length; it++) {
			const progress: any = progresses[it];
			if (progress.id === key || progress.name === key) {
				progress.fn = null;
				progresses.splice(it, 1);
			}
		}

		for (it = 0; it < delays.length; it++) {
			const delay: any = delays[it];
			if (delay.id === key || delay.name === key) {
				delay.fn = null;
				delays.splice(it, 1);
			}
		}
	}

	public static tick(): void {
		if (this.looping) {
			const timestamp: number = +new Date();

			for (const loop of loops) {
				if (loop.fn && timestamp - loop.timestamp >= loop.time) {
					loop.timestamp = timestamp;

					loop.fn();
				}
			}
		}

		if (this.progresses) {
			const timestamp: number = +new Date();

			for (const progress of progresses) {
				if (progress.fn && timestamp - progress.timestamp > progress.time) {
					progress.fn(1, true);

					progresses.splice(progresses.indexOf(progress), 1);
				} else {
					if (progress.fn) {
						progress.fn((timestamp - progress.timestamp) / progress.time, false);
					}
				}
			}
		}

		if (this.delaying) {
			const timestamp: number = +new Date();

			for (const delay of delays) {
				if (delay.fn && timestamp - delay.timestamp >= delay.time) {
					delay.fn();

					delays.splice(delays.indexOf(delay), 1);
				}
			}
		}

		window.requestAnimationFrame(this.tick.bind(this));
	}
}

window.requestAnimationFrame(Twist.tick.bind(Twist));

export default Twist;
