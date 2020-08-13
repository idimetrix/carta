import '~/styles/index.scss';

import moment from 'moment';
import React from 'react';
import { render } from 'react-dom';
import momentLocalizer from 'react-widgets-moment';
import { Store } from 'redux';
import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';

import i18n from '~/i18n';
import Root from '~/root';
import { configureStore } from '~/store';
import { IRootState } from '~/store/reducer';
// Import { library, dom } from '@fortawesome/fontawesome-svg-core';
// Import { fab } from '@fortawesome/free-brands-svg-icons';
// Import { fas } from '@fortawesome/free-solid-svg-icons';

// Library.add(fab, fas);
// Dom.watch();

i18n.changeLanguage('i18n');

moment.locale('en');
momentLocalizer();

if (process.env.SENTRY) {
	Sentry.init({ dsn: process.env.SENTRY });
}

ReactGA.initialize(process.env.GA);

ReactGA.pageview(window.location.pathname + window.location.search);

const store: Store<IRootState> = configureStore();
const node: HTMLElement = document.getElementById('root');

render(<Root store={store} />, node);
