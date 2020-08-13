import { createBrowserHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import ReactGA from 'react-ga';

// import { jwt } from './middlewares';
import { IRootState, rootReducer } from './reducer';
import rootSagas from './sagas';
import log from '~/log';

export const history: History = createBrowserHistory();

history.listen((location: any): void => {
	ReactGA.set({ page: location.pathname }); // Update the user's current page
	ReactGA.pageview(location.pathname); // Record a page view for the given page
});

const sagaMiddleware: any = createSagaMiddleware();
const router: Middleware = routerMiddleware(history);

let middlewares: Middleware[] = [sagaMiddleware, router]; // jwt

if (process.env.APP_DEBUG && process.env.NODE_ENV !== 'production') {
	log.disableAll();

	const loggerMiddleware: Middleware = createLogger({ collapsed: true, duration: true });
	middlewares = [...middlewares, loggerMiddleware];
}

export function configureStore(initialState?: IRootState): Store<IRootState> {
	const store: Store<IRootState> = createStore(rootReducer(history), initialState, applyMiddleware(...middlewares));

	sagaMiddleware.run(rootSagas);

	return store;
}
