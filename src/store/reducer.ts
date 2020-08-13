import { RouterState } from 'react-router-redux';
import { CombinedState, combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as modal, ReduxModalState } from 'redux-modal';
import { History } from 'history';

import { IActionsState } from './actions/models';
import * as actionsReducer from './actions/reducer';
import { IAuthState } from './auth/models';
import * as authReducer from './auth/reducer';
import { IModalsState } from './modals/models';
import * as modalsReducer from './modals/reducer';

export interface IRootState {
	readonly router: RouterState;
	readonly actions: IActionsState;
	readonly auth: IAuthState;
	readonly modals: IModalsState;
	readonly modal: ReduxModalState;
}

export const rootReducer: (history: History) => Reducer<CombinedState<IRootState>> = (history: History): Reducer<CombinedState<IRootState>> =>
	combineReducers<IRootState>({
		router: connectRouter(history) as any,
		actions: actionsReducer.reducer,
		auth: authReducer.reducer,
		modals: modalsReducer.reducer,
		modal,
	});
