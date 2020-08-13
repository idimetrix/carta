import { action } from 'typesafe-actions';

import { IContactAction, IContactData } from './models';

// --- Contact

export enum ContactActionsTypes {
	CONTACT_ACTION_REQUEST = 'CONTACT_ACTION_REQUEST',
	CONTACT_ACTION_SUCCESS = 'CONTACT_ACTION_SUCCESS',
	CONTACT_ACTION_FAILURE = 'CONTACT_ACTION_FAILURE',
}

export const contactAction = (payload: IContactData): IContactAction => action(ContactActionsTypes.CONTACT_ACTION_REQUEST, payload);

export const contactSuccess = (payload?: any): IContactAction => action(ContactActionsTypes.CONTACT_ACTION_SUCCESS, payload);

export const contactFailure = (payload?: any): IContactAction => action(ContactActionsTypes.CONTACT_ACTION_FAILURE, payload);
