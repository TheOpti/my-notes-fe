import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import type { AuthContextType, UserType } from 'types/context';
import type { UserResponseType } from 'types/api';

const AuthContext = createContext<AuthContextType>({
	login: null,
	logout: null,
	data: null,
	loading: false,
	loginLoading: false,
	logoutLoading: false,
});

export type PropsType = {
	children: React.ReactNode;
};

const AuthProvider = (props: PropsType): JSX.Element => {
	const [userData, setUserData] = useState<UserType>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [loginLoading, setLoginLoading] = useState<boolean>(false);
	const [logoutLoading, setLogoutLoading] = useState<boolean>(false);

	useEffect(() => {
		const checkAuthentication = async () => {
			try {
				const response: UserResponseType = await axios('http://localhost:3000/me', {
					withCredentials: true,
				});
				const { user } = response.data;

				setLoading(false);
				setUserData(user);
			} catch (err) {
				setLoading(false);
				setUserData(null);
			}
		};

		checkAuthentication();
	}, []);

	const login = async (login: string, password: string) => {
		setLoginLoading(true);
		try {
			const response: UserResponseType = await axios.post(
				'http://localhost:3000/login',
				{ login, password },
				{ withCredentials: true }
			);

			setUserData(response?.data?.user);
		} catch (error) {
			console.log('!!! login catch ', error);
			if (error && error.response) {
				const {
					data: { message },
				} = error.response;

				return message;
			}

			return 'There was an error with connecting to server.';
		} finally {
			setLoginLoading(false);
		}
	};

	const logout = async () => {
		setLogoutLoading(true);
		try {
			await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
			setUserData(null);
		} catch (_e) {
			return 'There was an error with connecting to server.';
		} finally {
			setLogoutLoading(false);
		}
	};

	return (
		<AuthContext.Provider value={{ data: userData, login, logout, loading, loginLoading, logoutLoading }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
