import React, { useContext } from 'react'
import { AuthContext } from './context/auth';

import type { UserType } from 'types/context';

import Application from './pages/Application';
import Login from './pages/Login';

function App(): React.ReactNode {
	const user: UserType = () => useContext(AuthContext);

  return user.data
    ? <Application />
    : <Login />
}

export default App;
