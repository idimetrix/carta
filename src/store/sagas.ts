import { all, fork } from 'redux-saga/effects';

import actionsSagas from './actions/sagas';
import authSagas from './auth/sagas';
import modalsSagas from './modals/sagas';

export default function* sagas(): Generator<any, any, any> {
	yield all([fork(actionsSagas)]);
	yield all([fork(authSagas)]);
	yield all([fork(modalsSagas)]);
}
