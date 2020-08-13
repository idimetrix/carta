import { call, takeLatest } from 'redux-saga/effects';
import validator from 'validator';

import { putSuccess, putFailure } from '~/store/handlers';
import { ContactActionsTypes, contactFailure, contactSuccess } from '~/store/actions/actions';
import { IContactAction, IContactData } from '~/store/actions/models';
import { INVALID_EMAIL, INVALID_MESSAGE, INVALID_NAME, INVALID_RESPONSE, INVALID_SUBJECT } from '~/constants';
import { contactApi } from '~/api/actions';

function* contactWorker({ payload }: IContactAction): Generator<any, any, any> {
	try {
		const { name, email, subject, message }: IContactData = payload;

		if (validator.isEmpty(name)) {
			return yield putFailure(contactFailure, INVALID_NAME);
		}
		if (!validator.isEmail(email)) {
			return yield putFailure(contactFailure, INVALID_EMAIL);
		}
		if (validator.isEmpty(subject)) {
			return yield putFailure(contactFailure, INVALID_SUBJECT);
		}
		if (validator.isEmpty(message)) {
			return yield putFailure(contactFailure, INVALID_MESSAGE);
		}

		const { data }: any = yield call(contactApi, payload);

		if (data) {
			yield putSuccess(contactSuccess, data);
		} else {
			throw INVALID_RESPONSE;
		}
	} catch (e) {
		yield putFailure(contactFailure, e);
	}
}

export default function* actionsSaga(): Generator<any, any, any> {
	yield takeLatest(ContactActionsTypes.CONTACT_ACTION_REQUEST, contactWorker);
}
