import React from 'react';
import ReactDOM from 'react-dom';

import { AuthProvider } from './context/auth';
import { NotificationsProvider } from './context/notifications';
import App from './app';

import './fonts.css';
import './index.css';

ReactDOM.render(
	<NotificationsProvider>
		<AuthProvider>
			<App />
		</AuthProvider>
	</NotificationsProvider>,
	document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
	(module as any).hot.accept();
}
