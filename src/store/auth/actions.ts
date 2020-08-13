import { action } from 'typesafe-actions';

import {
	IAuthorizationAction,
	IAuthorizationData,
	IDetailsAction,
	IDetailsData,
	IExitAction,
	ILocationAction,
	ILocationData,
	IPermissionsAction,
	IPermissionsData,
	IRegistrationAction,
	IRegistrationData,
	ITokenAction,
	ITokenData,
	IUserAction,
	IUserData,
	IImageUploadData,
	IImageUploadAction,
	IUpdatesData,
	IUpdatesAction,
} from './models';

// --- Authorization

export enum AuthorizationActionsTypes {
	AUTHORIZATION_ACTION_REQUEST = 'AUTHORIZATION_ACTION_REQUEST',
	AUTHORIZATION_ACTION_SUCCESS = 'AUTHORIZATION_ACTION_SUCCESS',
	AUTHORIZATION_ACTION_FAILURE = 'AUTHORIZATION_ACTION_FAILURE',
}

export const authorizationAction = (payload: IAuthorizationData): IAuthorizationAction =>
	action(AuthorizationActionsTypes.AUTHORIZATION_ACTION_REQUEST, payload);

export const authorizationSuccess = (payload?: any): IAuthorizationAction => action(AuthorizationActionsTypes.AUTHORIZATION_ACTION_SUCCESS, payload);

export const authorizationFailure = (payload?: any): IAuthorizationAction => action(AuthorizationActionsTypes.AUTHORIZATION_ACTION_FAILURE, payload);

// --- Registration

export enum RegistrationActionsTypes {
	REGISTRATION_ACTION_REQUEST = 'REGISTRATION_ACTION_REQUEST',
	REGISTRATION_ACTION_SUCCESS = 'REGISTRATION_ACTION_SUCCESS',
	REGISTRATION_ACTION_FAILURE = 'REGISTRATION_ACTION_FAILURE',
}

export const registrationAction = (payload: IRegistrationData): IRegistrationAction => action(RegistrationActionsTypes.REGISTRATION_ACTION_REQUEST, payload);

export const registrationSuccess = (payload?: any): IRegistrationAction => action(RegistrationActionsTypes.REGISTRATION_ACTION_SUCCESS, payload);

export const registrationFailure = (payload?: any): IRegistrationAction => action(RegistrationActionsTypes.REGISTRATION_ACTION_FAILURE, payload);

// --- Image Upload
export enum ImageUploadActionsTypes {
	IMAGE_UPLOAD_ACTION_REQUEST = 'IMAGE_UPLOAD_ACTION_REQUEST',
	IMAGE_UPLOAD_ACTION_SUCCESS = 'IMAGE_UPLOAD_ACTION_SUCCESS',
	IMAGE_UPLOAD_ACTION_FAILURE = 'IMAGE_UPLOAD_ACTION_FAILURE',
}

export const imageUploadAction = (payload: IImageUploadData): IImageUploadAction => action(ImageUploadActionsTypes.IMAGE_UPLOAD_ACTION_REQUEST, payload);

export const imageUploadSuccess = (payload?: any): IImageUploadAction => action(ImageUploadActionsTypes.IMAGE_UPLOAD_ACTION_SUCCESS, payload);

export const imageUploadFailure = (payload?: any): IImageUploadAction => action(ImageUploadActionsTypes.IMAGE_UPLOAD_ACTION_FAILURE, payload);

// --- exit

export enum ExitActionsTypes {
	EXIT_ACTION_REQUEST = 'EXIT_ACTION_REQUEST',
	EXIT_ACTION_SUCCESS = 'EXIT_ACTION_SUCCESS',
	EXIT_ACTION_FAILURE = 'EXIT_ACTION_FAILURE',
}

export const exitAction = (): IExitAction => action(ExitActionsTypes.EXIT_ACTION_REQUEST, {});

export const exitSuccess = (payload?: any): IExitAction => action(ExitActionsTypes.EXIT_ACTION_SUCCESS, payload);

export const exitFailure = (payload?: any): IExitAction => action(ExitActionsTypes.EXIT_ACTION_FAILURE, payload);

// --- permissions

export enum PermissionsActionsTypes {
	PERMISSIONS_ACTION_REQUEST = 'PERMISSIONS_ACTION_REQUEST',
	PERMISSIONS_ACTION_SUCCESS = 'PERMISSIONS_ACTION_SUCCESS',
	PERMISSIONS_ACTION_FAILURE = 'PERMISSIONS_ACTION_FAILURE',
}

export const permissionsAction = (payload: IPermissionsData): IPermissionsAction => action(PermissionsActionsTypes.PERMISSIONS_ACTION_REQUEST, payload);

export const permissionsSuccess = (payload?: any): IPermissionsAction => action(PermissionsActionsTypes.PERMISSIONS_ACTION_SUCCESS, payload);

export const permissionsFailure = (payload?: any): IPermissionsAction => action(PermissionsActionsTypes.PERMISSIONS_ACTION_FAILURE, payload);

// --- location

export enum LocationActionsTypes {
	LOCATION_ACTION_REQUEST = 'LOCATION_ACTION_REQUEST',
	LOCATION_ACTION_SUCCESS = 'LOCATION_ACTION_SUCCESS',
	LOCATION_ACTION_FAILURE = 'LOCATION_ACTION_FAILURE',
}

export const locationAction = (payload: ILocationData): ILocationAction => action(LocationActionsTypes.LOCATION_ACTION_REQUEST, payload);

export const locationSuccess = (payload?: any): ILocationAction => action(LocationActionsTypes.LOCATION_ACTION_SUCCESS, payload);

export const locationFailure = (payload?: any): ILocationAction => action(LocationActionsTypes.LOCATION_ACTION_FAILURE, payload);

// --- token

export enum TokenActionsTypes {
	TOKEN_ACTION_REQUEST = 'TOKEN_ACTION_REQUEST',
	TOKEN_ACTION_SUCCESS = 'TOKEN_ACTION_SUCCESS',
	TOKEN_ACTION_FAILURE = 'TOKEN_ACTION_FAILURE',
}

export const tokenAction = (payload?: ITokenData): ITokenAction => action(TokenActionsTypes.TOKEN_ACTION_REQUEST, payload);

export const tokenSuccess = (payload?: any): ITokenAction => action(TokenActionsTypes.TOKEN_ACTION_SUCCESS, payload);

export const tokenFailure = (payload?: any): ITokenAction => action(TokenActionsTypes.TOKEN_ACTION_FAILURE, payload);

// --- user

export enum UserActionsTypes {
	USER_ACTION_REQUEST = 'USER_ACTION_REQUEST',
	USER_ACTION_SUCCESS = 'USER_ACTION_SUCCESS',
	USER_ACTION_FAILURE = 'USER_ACTION_FAILURE',
}

export const userAction = (payload?: IUserData): IUserAction => action(UserActionsTypes.USER_ACTION_REQUEST, payload);

export const userSuccess = (payload?: any): IUserAction => action(UserActionsTypes.USER_ACTION_SUCCESS, payload);

export const userFailure = (payload?: any): IUserAction => action(UserActionsTypes.USER_ACTION_FAILURE, payload);

// --- details

export enum DetailsActionsTypes {
	DETAILS_ACTION_REQUEST = 'DETAILS_ACTION_REQUEST',
	DETAILS_ACTION_SUCCESS = 'DETAILS_ACTION_SUCCESS',
	DETAILS_ACTION_FAILURE = 'DETAILS_ACTION_FAILURE',
}

export const detailsAction = (payload?: IDetailsData): IDetailsAction => action(DetailsActionsTypes.DETAILS_ACTION_REQUEST, payload);

export const detailsSuccess = (payload?: any): IDetailsAction => action(DetailsActionsTypes.DETAILS_ACTION_SUCCESS, payload);

export const detailsFailure = (payload?: any): IDetailsAction => action(DetailsActionsTypes.DETAILS_ACTION_FAILURE, payload);

// --- updates

export enum UpdatesActionsTypes {
	UPDATES_ACTION_REQUEST = 'UPDATES_ACTION_REQUEST',
	UPDATES_ACTION_SUCCESS = 'UPDATES_ACTION_SUCCESS',
	UPDATES_ACTION_FAILURE = 'UPDATES_ACTION_FAILURE',
}

export const updatesAction = (payload?: IUpdatesData): IUpdatesAction => action(UpdatesActionsTypes.UPDATES_ACTION_REQUEST, payload);

export const updatesSuccess = (payload?: any): IUpdatesAction => action(UpdatesActionsTypes.UPDATES_ACTION_SUCCESS, payload);

export const updatesFailure = (payload?: any): IUpdatesAction => action(UpdatesActionsTypes.UPDATES_ACTION_FAILURE, payload);
