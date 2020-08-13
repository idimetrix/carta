import { IContactState } from '~/store/actions/models';
import { ContactActionsTypes } from '~/store/actions/actions';

const initialState: IContactState = {
	loading: false,
	error: null,
};

export function reducer(state: IContactState = initialState, action: any): IContactState {
	switch (action.type) {
		// --- Contact
		case ContactActionsTypes.CONTACT_ACTION_REQUEST:
			return { ...state, loading: true };
		case ContactActionsTypes.CONTACT_ACTION_SUCCESS:
			return { ...state, loading: false, error: null };
		case ContactActionsTypes.CONTACT_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };

		// ---
		default:
			return state;
	}
}

// Selectors

export const getLoading = (state: IContactState): boolean => state.loading;
export const getError = (state: IContactState): string => state.error;
