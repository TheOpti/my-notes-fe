import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import type { AuthContextType, UserType } from 'types/context';
import type { UserResponseType } from 'types/api';

const AuthContext = createContext<AuthContextType>({
	login: null,
	logout: null,
	data: null,
});

export type PropsType = {
	children: React.ReactNode;
};

const AuthProvider = (props: PropsType): JSX.Element => {
	const [userData, setUserData] = useState<UserType>(null);
	const [loading, setLoading] = useState<boolean>(true);

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

	if (loading) {
		return null;
	}

	const login = async (login: string, password: string) => {
		try {
			const data: UserResponseType = await axios.post(
				'http://localhost:3000/login',
				{ login, password },
				{ withCredentials: true }
			);
			setUserData(data);
		} catch (error) {
			const {
				data: { message },
			} = error.response;
			return message;
		}
	};

	const logout = async () => {
		const response = await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
		console.log('Response from logout', response);
		setUserData(null);
	};

	return <AuthContext.Provider value={{ data: userData, login, logout }}>{props.children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
