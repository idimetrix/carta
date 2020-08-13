import { action } from 'typesafe-actions';

import { show } from 'redux-modal';

import { IModalsAction, IModalsData } from './models';
import { IAccessAction, IAccessProps, IAlertAction, IAlertProps, IConfirmAction, IConfirmProps, IPromptAction, IPromptProps } from '~/modals';

// --- Modals

export enum ModalsActionsTypes {
	MODALS_GEO_ACTION_REQUEST = 'MODALS_GEO_ACTION_REQUEST',
	MODALS_GEO_ACTION_SUCCESS = 'MODALS_GEO_ACTION_SUCCESS',
	MODALS_GEO_ACTION_FAILURE = 'MODALS_GEO_ACTION_FAILURE',
}

export const geoModalAction = (payload: IModalsData): IModalsAction => action(ModalsActionsTypes.MODALS_GEO_ACTION_REQUEST, payload);

export const geoModalSuccess = (payload?: any): IModalsAction => action(ModalsActionsTypes.MODALS_GEO_ACTION_SUCCESS, payload);

export const geoModalFailure = (payload?: any): IModalsAction => action(ModalsActionsTypes.MODALS_GEO_ACTION_FAILURE, payload);

// ---

export const alertModalAction = (payload: IAlertProps): IAlertAction => show('alert', payload) as IAlertAction;
export const confirmModalAction = (payload: IConfirmProps): IConfirmAction => show('confirm', payload) as IConfirmAction;
export const promptModalAction = (payload: IPromptProps): IPromptAction => show('prompt', payload) as IPromptAction;
export const accessModalAction = (payload: IAccessProps): IAccessAction => show('access', payload) as IAccessAction;
