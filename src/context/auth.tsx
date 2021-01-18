import React, { useState, useEffect } from 'react';
import axios from 'axios';

import type { UserLoginResponseType } from 'types/api';

const AuthContext = React.createContext({});

export type ProviderType = {
	children: React.ReactNode;
};

function AuthProvider(props: ProviderType): React.ReactNode {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response: UserLoginResponseType = await axios('http://localhost:3000/me', { withCredentials: true });
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
      const data: UserLoginResponseType = await axios.post('http://localhost:3000/login', { login, password }, { withCredentials: true });
      setUserData(data);
    } catch (error) {
      const { data: { message } } = error.response;
      return message;
    }
  };

  const logout = async () => {
    const response = await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
    console.log('Response from logout', response);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ data: userData, login, logout }}>
      { props.children }
    </AuthContext.Provider>
  );
}

export {
  AuthContext,
  AuthProvider,
}
