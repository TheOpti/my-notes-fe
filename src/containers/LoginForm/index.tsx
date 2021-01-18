import React, { Component } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';

import styles from './styles.css';

type PropsType = {
	handleLogin: (login: string, password: string) => Promise<string>;
};

type StateType = {
	loginFormFields: {
		[fieldName: string]: string;
	};
	loading: boolean;
	errorMessage: string;
};

class LoginForm extends Component<PropsType, StateType> {
	state = {
		loginFormFields: {
			login: '',
			password: '',
		},
		errorMessage: '',
		loading: false,
	};

	loginToApplication = async (): Promise<void> => {
		const { handleLogin } = this.props;
		const {
			loginFormFields: { login, password },
		} = this.state;

		this.setState({ loading: true }, async () => {
			try {
				const response = await handleLogin(login, password);
				this.setState({ errorMessage: response, loading: false });
			} catch (error) {
				this.setState({ errorMessage: error });
			}
		});
	};

	updateField = (fieldName: string, value: string): void => {
		this.setState((prevState) => ({
			...prevState,
			loginFormFields: {
				...prevState.loginFormFields,
				[fieldName]: value,
			},
		}));
	};

	render(): React.ReactNode {
		const {
			loginFormFields: { login, password },
			errorMessage,
		} = this.state;

		return (
			<div className={styles.root}>
				<Input label="Login" name="login" value={login} handleChange={this.updateField} />
				<Input label="Password" name="password" value={password} handleChange={this.updateField} />
				<Button onClickHandler={this.loginToApplication} label="Login" classname={styles.login} />
				{errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
			</div>
		);
	}
}

export default LoginForm;
