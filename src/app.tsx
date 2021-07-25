import React, { useContext } from 'react';
import { AuthContext } from 'context/auth';
import type { AuthContextType } from 'types/context';

import Loader from 'components/LoadingSpinner';
import NotificationsContainer from 'components/NotificationsContainer';

import Application from './pages/Application';
import Login from './pages/Login';

function App(): JSX.Element {
	const contextData: AuthContextType = useContext<AuthContextType>(AuthContext);

	if (contextData.loading) {
		return <Loader size="large" />;
	}

	return (
		<>
			{contextData.data ? <Application /> : <Login />}
			<NotificationsContainer />
		</>
	);
}

export default App;
