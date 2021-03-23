import React, { useContext } from 'react';

import { AuthContext } from 'context/auth';
import type { AuthContextType } from 'types/context';
import LoadingSpinner from 'components/LoadingSpinner';
import Navbar from 'containers/Navbar';

import styles from './styles.css';

const Application = (): JSX.Element => {
	const { logout, loading }: AuthContextType = useContext<AuthContextType>(AuthContext);

	return (
		<>
			<Navbar />
			{loading && <LoadingSpinner withMask size="large" />}
			<div className={styles.content}>
				<div>This part is visible only for logged users</div>
				<button onClick={logout}>Logout from the app</button>
			</div>
		</>
	);
};

export default Application;
