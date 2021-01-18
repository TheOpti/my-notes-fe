import React, { useContext } from 'react';
import { AuthContext } from 'context/auth';
import type { AuthContextType } from 'types/context';

import Application from './pages/Application';
import Login from './pages/Login';

function App(): JSX.Element {
	const contextData: AuthContextType = useContext<AuthContextType>(AuthContext);

	return contextData.data ? <Application /> : <Login />;
}

export default App;
