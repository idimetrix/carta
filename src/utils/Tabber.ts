const GUID: () => string = (): string => {
	const s4: () => string = (): string =>
		Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);

	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

const LOCALSTORAGE_KEY: string = 'tabs';

export default class Tabber {
	private static id: string = GUID();

	private static callback: (root: boolean) => void = null;

	private static handleStorage(e: StorageEvent): void {
		if (e.key === LOCALSTORAGE_KEY) {
			Tabber?.callback!(Tabber.root());
		}
	}

	private static handleUnload(e: BeforeUnloadEvent): void {
		const ids: string[] = Tabber.ids();
		for (let i: number = 0, length: number = ids.length; i < length; i++) {
			if (ids[i] === Tabber.id) {
				ids.splice(i, 1);

				localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(ids));

				Tabber.root();

				break;
			}
		}
	}

	private static ids(): string[] {
		return (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '[]') || []) as string[];
	}

	public static root(): boolean {
		const root: boolean = Tabber.ids()[Tabber.ids().length - 1] === Tabber.id;

		document.body.className = document.body.className.replace('child-screen', '');
		document.body.className = document.body.className.replace('main-screen', '');
		document.body.className += root ? 'main-screen' : 'child-screen';

		return root;
	}

	public static enable(callback: (root: boolean) => void = null, doc: Document = document, win: Window = window): void {
		this.disable(doc, win);

		this.callback = callback;

		win.addEventListener('storage', this.handleStorage, false);
		win.addEventListener('beforeunload', this.handleUnload, false);
		win.addEventListener('unload', this.handleUnload, false);

		win.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.ids().concat(this.id)));

		this?.callback!(this.root());
	}

	public static disable(doc: Document = document, win: Window = window): void {
		this.callback = null;

		win.removeEventListener('storage', this.handleStorage, false);
		win.removeEventListener('beforeunload', this.handleUnload, false);
		win.removeEventListener('unload', this.handleUnload, false);
	}
}
