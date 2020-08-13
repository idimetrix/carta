import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import decode from 'jwt-decode';

import { IRootState } from '~/store/reducer';
import { tokenAction } from '~/store/auth/actions';

interface IToken {
	userId: string;
	iat: number;
	exp: number;
}

const jwt: Middleware = ({ dispatch, getState }: MiddlewareAPI<Dispatch, IRootState>): any => {
	let processing: boolean = false;

	return (next: Dispatch): Dispatch => <T extends AnyAction>(action: T): T => {
		const state: IRootState = getState();

		const token: string = state.auth.token;

		if (token && !processing) {
			try {
				const { exp }: IToken = decode(token);

				if (exp && exp - Date.now() / 1000 < 5 * 1000) {
					processing = true;

					dispatch(tokenAction());
				}
			} catch {
				// Shallow error here
			}
		}

		return next(action);
	};
};

export default jwt;
