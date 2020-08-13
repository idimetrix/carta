import { isBrowser } from 'react-device-detect';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
	AuthorizationActionsTypes,
	DetailsActionsTypes,
	ExitActionsTypes,
	LocationActionsTypes,
	PermissionsActionsTypes,
	RegistrationActionsTypes,
	TokenActionsTypes,
	UserActionsTypes,
} from './actions';
import { IAuthState, IDetails, ILocation, IPermissions, IUser } from './models';

const initialState: IAuthState = {
	token: JSON.parse(localStorage.getItem('token')) as string,
	user: JSON.parse(localStorage.getItem('user')) as IUser,
	details: JSON.parse(localStorage.getItem('details')) as IDetails,
	permissions: {
		...(JSON.parse(localStorage.getItem('permissions')) || {}),
		...(!isBrowser ? { geo: true } : {}),
	} as any,
	location: {},
	loading: false,
	error: null,
};

export function reducer(state: IAuthState = initialState, action: any): IAuthState {
	switch (action.type) {
		// --- Location
		case LOCATION_CHANGE:
			return { ...state, error: null };

		// --- Authorization
		case AuthorizationActionsTypes.AUTHORIZATION_ACTION_REQUEST:
			return { ...state, loading: true };
		case AuthorizationActionsTypes.AUTHORIZATION_ACTION_SUCCESS:
			localStorage.setItem('token', JSON.stringify(action.payload));
			localStorage.setItem('user', JSON.stringify(action.payload));
			localStorage.setItem('details', JSON.stringify(action.payload));

			return {
				...state,
				loading: false,
				error: null,
				token: JSON.stringify(action.payload),
				user: action.payload as IUser,
				details: action.payload as IDetails,
			};
		case AuthorizationActionsTypes.AUTHORIZATION_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };

		// --- Registration
		case RegistrationActionsTypes.REGISTRATION_ACTION_REQUEST:
			return { ...state, loading: true };
		case RegistrationActionsTypes.REGISTRATION_ACTION_SUCCESS:
			return { ...state, loading: false, error: null, user: null };
		case RegistrationActionsTypes.REGISTRATION_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };

		// --- Exit
		case ExitActionsTypes.EXIT_ACTION_REQUEST:
			return { ...state, loading: true };
		case ExitActionsTypes.EXIT_ACTION_SUCCESS:
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			localStorage.removeItem('details');
			localStorage.removeItem('permissions');
			return { ...state, loading: false, error: null, token: null, permissions: null, user: null };
		case ExitActionsTypes.EXIT_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };

		// --- Permissions
		case PermissionsActionsTypes.PERMISSIONS_ACTION_REQUEST:
			return { ...state, loading: true };
		case PermissionsActionsTypes.PERMISSIONS_ACTION_SUCCESS:
			const permissions: IPermissions = { ...(state.permissions || {}), ...action.payload.permissions };
			localStorage.setItem('permissions', JSON.stringify(permissions));
			return { ...state, loading: false, permissions };
		case PermissionsActionsTypes.PERMISSIONS_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };

		// --- Location
		case LocationActionsTypes.LOCATION_ACTION_REQUEST:
			return { ...state, loading: true };
		case LocationActionsTypes.LOCATION_ACTION_SUCCESS:
			return { ...state, loading: false, error: null, location: action.payload };
		case LocationActionsTypes.LOCATION_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };

		// --- Token
		case TokenActionsTypes.TOKEN_ACTION_REQUEST:
			return { ...state, loading: true };
		case TokenActionsTypes.TOKEN_ACTION_SUCCESS:
			return { ...state, loading: false, error: null, token: action.payload };
		case TokenActionsTypes.TOKEN_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };

		// --- User
		case UserActionsTypes.USER_ACTION_REQUEST:
			return { ...state, loading: true };
		case UserActionsTypes.USER_ACTION_SUCCESS:
			return { ...state, loading: false, error: null, user: action.payload };
		case UserActionsTypes.USER_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };

		// --- Details
		case DetailsActionsTypes.DETAILS_ACTION_REQUEST:
			return { ...state, loading: true };
		case DetailsActionsTypes.DETAILS_ACTION_SUCCESS:
			return { ...state, loading: false, error: null, details: action.payload };
		case DetailsActionsTypes.DETAILS_ACTION_FAILURE:
			return { ...state, loading: false, error: action.payload };

		// ---
		default:
			return state;
	}
}

// Selectors

export const getToken = (state: IAuthState): string => state.token;
export const getUser = (state: IAuthState): IUser => state.user;
export const getDetails = (state: IAuthState): IDetails => state.details;
export const getPermissions = (state: IAuthState): IPermissions => state.permissions;
export const getLocation = (state: IAuthState): ILocation => state.location;
export const getLoading = (state: IAuthState): boolean => state.loading;
export const getError = (state: IAuthState): string => state.error;
