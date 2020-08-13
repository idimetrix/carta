import { put, takeLatest } from 'redux-saga/effects';

import { geoModalSuccess, ModalsActionsTypes } from './actions';
import { IModalsAction } from './models';

function* modalGeo({ payload }: IModalsAction): Generator<any, any, any> {
	yield put(geoModalSuccess(payload));
}

export default function* authSaga(): Generator<any, any, any> {
	yield takeLatest(ModalsActionsTypes.MODALS_GEO_ACTION_REQUEST, modalGeo);
}
