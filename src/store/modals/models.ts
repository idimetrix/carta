export interface IModalsMeta {
	a?: string;
	b?: string;
	c?: string;
}

export interface IModalsState {
	geoModal: boolean;
	error: string;
	loading: boolean;
}

// --- Modals

export interface IModalsData {
	visible: boolean;
	title?: string;
	description?: string;
	meta?: IModalsMeta;
}

export interface IModalsAction {
	readonly payload: IModalsData;
	readonly type: string;
}
