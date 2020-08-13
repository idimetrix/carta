import { LOCATION_CHANGE } from 'react-router-redux';

import { ModalsActionsTypes } from './actions';
import { IModalsState } from './models';

const initialState: IModalsState = {
	geoModal: false,
	loading: false,
	error: null,
};

export function reducer(state: IModalsState = initialState, action: any): IModalsState {
	switch (action.type) {
		// --- Location
		case LOCATION_CHANGE:
			return { ...state, error: null };

		case ModalsActionsTypes.MODALS_GEO_ACTION_REQUEST:
			return { ...state, loading: true };
		case ModalsActionsTypes.MODALS_GEO_ACTION_SUCCESS:
			return { ...state, loading: false, geoModal: action.payload.visible };
		case ModalsActionsTypes.MODALS_GEO_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };
		// ---
		default:
			return state;
	}
}

// Selectors

export const getLoading = (state: IModalsState): boolean => state.loading;
export const getError = (state: IModalsState): string => state.error;

export const getGeoModal = (state: IModalsState): boolean => state.geoModal;
