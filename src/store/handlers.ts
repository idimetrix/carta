import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { exitSuccess } from '~/store/auth/actions';

export function* handleSuccess(data: any): any {
	return data;
}

export function* handleFailure(e: any): Generator<any, string, string> {
	const response: any = e?.response;

	const data: any = response?.data;
	const status: any = response?.status;

	const message: string =
		data?.error ?? data?.message ?? data?.errorMessage ?? data?.err ?? data?.msg ?? data?.errMsg ?? e?.message ?? (typeof e === 'string' ? e : 'Unknown error');

	try {
		// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		switch (status) {
			case 401: // Unauthorized
				yield put(exitSuccess());
				yield put(push('/auth/authorization'));
				break;

			case 400: // Bad request
				break;

			case 402: // Payment Required
			case 403: // Forbidden
				break;

			case 500: // Internal Server Error
			case 501: // Not Implemented
			case 502: // Bad Gateway
			case 503: // Service Unavailable
			case 504: // Gateway Timeout
				break;

			default:
				break;
		}
	} catch {
		// Shallow error here
	}

	return message;
}

export function* handleActionSuccess(action: (payload?: any) => any, data?: any): any {
	return action!(yield handleSuccess(data));
}

export function* handleActionFailure(action: (payload?: any) => any, data?: any): any {
	return action!(yield handleFailure(data));
}

export function* putSuccess(action: (payload?: any) => any, data?: any): any {
	return yield put(yield handleActionSuccess(action, data));
}

export function* putFailure(action: (payload?: any) => any, data?: any): any {
	return yield put(yield handleActionFailure(action, data));
}
