import { call, put, takeLatest, select } from 'redux-saga/effects';
import validator from 'validator';
import { push } from 'react-router-redux';
import { isBrowser } from 'react-device-detect';

import log from '~/log';
import { Geo } from '~/utils';
import { locationApi } from '~/api';
import {
	DEFAULT_USER,
	INVALID_EMAIL,
	INVALID_EMAIL_OR_PASSWORD,
	INVALID_FIRST_NAME,
	INVALID_LAST_NAME,
	INVALID_PASSWORD,
	INVALID_PASSWORD_CONFIRM,
	INVALID_POSITION,
	INVALID_RESPONSE,
} from '~/constants';
import {
	authorizationAction,
	AuthorizationActionsTypes,
	authorizationFailure,
	authorizationSuccess,
	DetailsActionsTypes,
	detailsFailure,
	detailsSuccess,
	ExitActionsTypes,
	exitFailure,
	exitSuccess,
	LocationActionsTypes,
	locationFailure,
	locationSuccess,
	PermissionsActionsTypes,
	permissionsFailure,
	permissionsSuccess,
	RegistrationActionsTypes,
	registrationFailure,
	registrationSuccess,
	TokenActionsTypes,
	tokenFailure,
	tokenSuccess,
	UserActionsTypes,
	userFailure,
	userSuccess,
	imageUploadFailure,
	ImageUploadActionsTypes,
	UpdatesActionsTypes,
	updatesSuccess,
	updatesFailure,
} from './actions';
import {
	IAuthorizationAction,
	IAuthorizationData,
	IDetailsAction,
	IExitAction,
	ILocationAction,
	IPermissionsAction,
	IRegistrationAction,
	IRegistrationData,
	ITokenAction,
	IUserAction,
	IImageUploadAction,
	IImageUploadData,
	IUpdatesAction,
} from './models';
import { geoModalSuccess } from '~/store/modals/actions';
import { IRootState } from '~/store/reducer';
import { putFailure, putSuccess } from '~/store/handlers';

function* authorizationWorker({ payload }: IAuthorizationAction): Generator<any, any, any> {
	try {
		const { email, password }: IAuthorizationData = payload;

		if (!validator.isEmail(email) || email !== DEFAULT_USER.email) {
			return yield putFailure(authorizationFailure, INVALID_EMAIL);
		}
		if (!validator.isLength(password, { min: 6 }) || password !== DEFAULT_USER.password) {
			return yield putFailure(authorizationFailure, INVALID_PASSWORD);
		}

		const user: any = DEFAULT_USER;

		if (user) {
			yield putSuccess(authorizationSuccess, user);
			yield put(push('/home'));
		} else {
			throw INVALID_EMAIL_OR_PASSWORD;
		}
	} catch (e) {
		yield putFailure(authorizationFailure, e);
	}
}

function* registrationWorker({ payload }: IRegistrationAction): Generator<any, any, any> {
	try {
		const { firstName, lastName, email, password, confirm }: IRegistrationData = payload;

		if (!validator.isLength(firstName, { min: 1 })) {
			return yield putFailure(registrationFailure, INVALID_FIRST_NAME);
		}
		if (!validator.isLength(lastName, { min: 1 })) {
			return yield putFailure(registrationFailure, INVALID_LAST_NAME);
		}
		if (!validator.isEmail(email)) {
			return yield putFailure(registrationFailure, INVALID_EMAIL);
		}
		if (!validator.isLength(password, { min: 6 })) {
			return yield putFailure(registrationFailure, INVALID_PASSWORD);
		}
		if (password !== confirm) {
			return yield putFailure(registrationFailure, INVALID_PASSWORD_CONFIRM);
		}

		const { data }: any = yield call(null, payload);

		if (data && data.id) {
			yield putSuccess(registrationSuccess, data);
			yield putSuccess(authorizationAction, { email, password });
		} else {
			throw INVALID_EMAIL_OR_PASSWORD;
		}
	} catch (e) {
		yield putFailure(registrationFailure, e);
	}
}

function* exitWorker({ payload }: IExitAction): Generator<any, any, any> {
	try {
		yield putSuccess(exitSuccess);
		yield put(push('/auth/authorization'));
	} catch (e) {
		yield putFailure(exitFailure, e);
	}
}

function* permissionsWorker({ payload }: IPermissionsAction): Generator<any, any, any> {
	try {
		if (isBrowser) {
			const position: Position = yield Geo.position();

			if (position) {
				yield putSuccess(permissionsSuccess, payload);
				yield putSuccess(geoModalSuccess, { visible: false });
			} else {
				throw INVALID_POSITION;
			}
		} else {
			yield putSuccess(permissionsSuccess, payload);
			yield putSuccess(geoModalSuccess, { visible: false });
		}
	} catch (e) {
		switch (e?.code) {
			case 1: // PERMISSION_DENIED
				log.debug('position error: PERMISSION_DENIED');

				yield putFailure(permissionsFailure, 'permissions: PERMISSION_DENIED');
				break;

			case 2: // POSITION_UNAVAILABLE
				log.debug('position error: POSITION_UNAVAILABLE');

				yield putFailure(permissionsFailure, 'permissions: POSITION_UNAVAILABLE');
				break;

			case 3: // TIMEOUT
				log.debug('position error: TIMEOUT');

				yield putFailure(permissionsFailure, 'permissions: TIMEOUT');
				break;

			default:
				yield putFailure(permissionsFailure, e);
				break;
		}
	}
}

function* locationWorker({ payload }: ILocationAction): Generator<any, any, any> {
	try {
		const data: any = yield call(locationApi);

		if (data && data.request) {
			yield putSuccess(locationSuccess, data);
		} else {
			throw INVALID_RESPONSE;
		}
	} catch (e) {
		yield putFailure(locationFailure, e);
	}
}

function* tokenWorker({ payload }: ITokenAction): Generator<any, any, any> {
	try {
		const state: IRootState = yield select();

		const { data }: any = yield call(null, state.auth.token);

		if (data && data.token) {
			yield putSuccess(tokenSuccess, data.token);
		} else {
			yield putFailure(tokenFailure);
			yield putSuccess(exitSuccess);
			yield put(push('/auth/authorization'));
		}
	} catch (e) {
		yield putFailure(tokenFailure, e);
		yield putSuccess(exitSuccess);
		yield put(push('/auth/authorization'));
	}
}

function* userWorker({ payload }: IUserAction): Generator<any, any, any> {
	try {
		const state: IRootState = yield select();

		const { data }: any = yield call(null, state.auth.user.id);

		if (data) {
			yield putSuccess(userSuccess, data);
		} else {
			throw INVALID_RESPONSE;
		}
	} catch (e) {
		yield putFailure(userFailure, e);
	}
}

function* detailsWorker({ payload }: IDetailsAction): Generator<any, any, any> {
	try {
		const state: IRootState = yield select();

		const { data }: any = yield call(null, state.auth.user.id);

		if (data) {
			yield putSuccess(detailsSuccess, data);
		} else {
			throw INVALID_RESPONSE;
		}
	} catch (e) {
		yield putFailure(detailsFailure, e);
	}
}

function* imageUploadWorker({ payload }: IImageUploadAction): Generator<any, any, any> {
	try {
		const { contentType, photoFile, userId }: IImageUploadData = payload;

		if (validator.isEmpty(contentType)) {
			return yield putFailure(imageUploadFailure, 'Invalid Content Type.');
		}

		if (!['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(photoFile?.type)) {
			return yield putFailure(imageUploadFailure, 'Invalid Photo File.');
		}

		if (validator.isEmpty(userId)) {
			return yield putFailure(imageUploadFailure, 'Invalid User Id.');
		}

		// 1. Make call to initiate image upload and get back
		const { data }: any = yield call(null, payload);
		const { imageId, s3PutObjectURL }: any = data;

		const { uploadResult }: any = yield call(null, { contentType, imageId, photoFile, s3PutObjectURL });

		if (uploadResult) {
			// enter code to process result

			log.debug('uploadResult', uploadResult);
		}

		// todo: M.N. Complete this
		// if (data && data.id) {
		// 	yield putSuccess(registrationSuccess, data);
		// 	yield putSuccess(authorizationAction, { email, password });
		// } else {
		// 	throw INVALID_EMAIL_OR_PASSWORD;
		// }
	} catch (e) {
		yield putFailure(registrationFailure, e);
	}
}

function* updatesWorker({ payload }: IUpdatesAction): Generator<any, any, any> {
	try {
		const state: IRootState = yield select();

		const { data }: any = yield call(null, state.auth.user.id, payload as any);

		if (data) {
			try {
				yield userWorker({} as any);
				yield detailsWorker({} as any);

				yield putSuccess(updatesSuccess, data);
			} catch (e) {
				yield putFailure(updatesFailure, e);
			}
		} else {
			throw INVALID_RESPONSE;
		}
	} catch (e) {
		yield putFailure(updatesFailure, e);
	}
}

export default function* authSaga(): Generator<any, any, any> {
	yield takeLatest(AuthorizationActionsTypes.AUTHORIZATION_ACTION_REQUEST, authorizationWorker);
	yield takeLatest(RegistrationActionsTypes.REGISTRATION_ACTION_REQUEST, registrationWorker);
	yield takeLatest(ExitActionsTypes.EXIT_ACTION_REQUEST, exitWorker);
	yield takeLatest(PermissionsActionsTypes.PERMISSIONS_ACTION_REQUEST, permissionsWorker);
	yield takeLatest(LocationActionsTypes.LOCATION_ACTION_REQUEST, locationWorker);
	yield takeLatest(TokenActionsTypes.TOKEN_ACTION_REQUEST, tokenWorker);
	yield takeLatest(UserActionsTypes.USER_ACTION_REQUEST, userWorker);
	yield takeLatest(DetailsActionsTypes.DETAILS_ACTION_REQUEST, detailsWorker);
	yield takeLatest(ImageUploadActionsTypes.IMAGE_UPLOAD_ACTION_REQUEST, imageUploadWorker);
	yield takeLatest(UpdatesActionsTypes.UPDATES_ACTION_REQUEST, updatesWorker);
}
