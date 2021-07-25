import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

import type { AuthContextType, UserType } from 'types/context';
import type { UserResponseType } from 'types/api';
import { NotificationsContextType } from 'types/context';
import { NotificationsContext } from 'context/notifications';

const AuthContext = createContext<AuthContextType>({
	login: null,
	logout: null,
	data: null,
	loading: false,
	loginLoading: false,
	logoutLoading: false,
});

type PropsType = {
	children: React.ReactNode;
};

const loginCorrectNotification = {
	id: 'login-ok',
	title: 'Successfully logged in',
	revocable: false,
};

const serverErrorNotification = {
	id: 'login-error',
	title: 'Could not establish connection with the server.',
	revocable: false,
};

const AuthProvider = (props: PropsType): JSX.Element => {
	const { addNotification }: NotificationsContextType = useContext<NotificationsContextType>(NotificationsContext);
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

				addNotification(loginCorrectNotification);
				setLoading(false);
				setUserData(user);
			} catch (err) {
				addNotification(serverErrorNotification);
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
			addNotification(loginCorrectNotification);
		} catch (error) {
			if (error && error.response) {
				const {
					data: { message },
				} = error.response;

				return message;
			}

			addNotification(serverErrorNotification);
			return 'There was an error with connecting to the server.';
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
