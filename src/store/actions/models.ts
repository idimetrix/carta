export interface IActionsState {
	readonly error: string;
	readonly loading: boolean;
}

// --- Contact

export interface IContactState {
	readonly error: string;
	readonly loading: boolean;
}

export interface IContactData {
	readonly name: string;
	readonly email: string;
	readonly subject: string;
	readonly message: string;
}

export interface IContactAction {
	readonly payload: IContactData;
	readonly type: string;
}
