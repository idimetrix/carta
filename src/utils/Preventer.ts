const disabledEvent = (e: UIEvent): boolean => {
	if (e.stopPropagation) {
		e.stopPropagation();
	} else if (e?.view?.event) {
		e.view.event.cancelBubble = true;
	}
	e.preventDefault();

	return false;
};

export default class Preventer {
	private static console: any;

	private static handleContextmenu(e: MouseEvent): boolean {
		return disabledEvent(e);
	}

	private static handleKey(e: KeyboardEvent): boolean {
		let flag: boolean = false;

		// "I" key
		if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
			flag = flag || disabledEvent(e);
		}
		// "J" key
		if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
			flag = flag || disabledEvent(e);
		}
		// "C" key
		if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
			flag = flag || disabledEvent(e);
		}
		// "E" key
		if (e.ctrlKey && e.shiftKey && e.keyCode === 69) {
			flag = flag || disabledEvent(e);
		}
		// "K" key
		if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
			flag = flag || disabledEvent(e);
		}
		// "Z" key
		if (e.ctrlKey && e.shiftKey && e.keyCode === 90) {
			flag = flag || disabledEvent(e);
		}
		// "S" key + macOS
		if (e.keyCode === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
			flag = flag || disabledEvent(e);
		}
		// "U" key
		if (e.ctrlKey && e.keyCode === 85) {
			flag = flag || disabledEvent(e);
		}
		// "F5" key
		if (e.shiftKey && e.keyCode === 116) {
			flag = flag || disabledEvent(e);
		}
		// "F7" key
		if (e.shiftKey && e.keyCode === 118) {
			flag = flag || disabledEvent(e);
		}
		// "F9" key
		if (e.shiftKey && e.keyCode === 120) {
			flag = flag || disabledEvent(e);
		}
		// "F12" key
		if (e.shiftKey && e.keyCode === 123) {
			flag = flag || disabledEvent(e);
		}
		// "F12" key
		if (e.keyCode === 123) {
			flag = flag || disabledEvent(e);
		}

		return flag;
	}

	public static enable(doc: Document = document, win: any = window): void {
		this.disable(doc, win);

		console.log(
			'%c Carta %c Healthcare ',
			'color: green; background: #222; font-size: 24px; font-weight: bold; line-height: 30px;',
			'color: white; background: red; font-size: 24px; font-weight: bold; line-height: 30px;'
		);
		console.log(
			`%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a Carta feature or "hack" someone's account, it is a scam and will give them access to your Carta account.`,
			'font-size: 20px;'
		);
		console.log('%cSee https://www.carta.healthcare/ for more information.', 'font-size: 20px;');

		try {
			this.console = win.console;

			const console: any = this.console;

			Object.defineProperty(win, 'console', {
				get: (): any => {
					if (console._commandLineAPI) {
						throw new Error('Sorry, for security reasons, the script console is deactivated on carta.com');
					}
					return this.console;
				},
				set: (value: any): void => {
					this.console = value;
				},
			});
		} catch {
			// Shallow error here
		}

		doc.addEventListener('contextmenu', this.handleContextmenu, false);
		doc.addEventListener('keydown', this.handleKey, false);
		doc.addEventListener('keyup', this.handleKey, false);
	}

	public static disable(doc: Document = document, win: Window = window): void {
		doc.removeEventListener('contextmenu', this.handleContextmenu, false);
		doc.removeEventListener('keydown', this.handleKey, false);
		doc.removeEventListener('keyup', this.handleKey, false);
	}
}
