export default class Watcher {
	private ids: number[] = [];

	public watch(selector: string, callback: (nodes: HTMLElement[]) => void, doc: Document = document, win: Window = window): number {
		const id: number = win.setInterval((): void => {
			const nodes: HTMLElement[] = [...(doc.querySelectorAll(selector) as any)];

			if (nodes?.length) {
				callback!(nodes);

				win.clearInterval(id);
			}
		}, 100);

		this.ids.push(id);

		return id;
	}

	public destroy(key?: number, doc: Document = document, win: Window = window): void {
		if (key) {
			win.clearInterval(key);
		} else {
			this.ids.forEach((id: number): void => window.clearInterval(id));
			this.ids = [];
		}
	}
}
