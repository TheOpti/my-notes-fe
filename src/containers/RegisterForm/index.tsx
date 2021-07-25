import React, { Component } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';

import { isValidEmail, isValidPassword } from '../../helpers/forms';

import styles from './styles.css';

type PropsType = {
	loading: boolean;
};

type StateType = {
	registerFormFields: {
		[fieldName: string]: string;
	};
	registerFormErrors: {
		[fieldName: string]: string;
	};
	formSubmitted: boolean;
};

class RegisterForm extends Component<PropsType, StateType> {
	state = {
		registerFormFields: {
			login: '',
			email: '',
			password: '',
			passwordRepeated: '',
		},
		registerFormErrors: {
			general: '',
			login: '',
			email: '',
			password: '',
			passwordRepeated: '',
		},
		formSubmitted: false,
	};

	updateField = (fieldName: string, value: string): void => {
		this.setState((prevState) => ({
			...prevState,
			registerFormFields: {
				...prevState.registerFormFields,
				[fieldName]: value,
			},
		}));
	};

	register = (): void => {
		const {
			registerFormFields: { login, email, password, passwordRepeated },
		} = this.state;

		const emailCorrect = email && isValidEmail(email);
		const isPasswordCorrect = password && isValidPassword(password);
		const isRepeatedPasswordCorrect = passwordRepeated && isValidPassword(passwordRepeated);

		if (!login || !emailCorrect || !isPasswordCorrect || !isRepeatedPasswordCorrect || password !== passwordRepeated) {
			const registerFormErrors = {
				general: 'Please setup all fields correctly.',
				login: !login ? 'Please enter correct login for your account.' : '',
				email: !emailCorrect ? 'Please enter correct email.' : '',
				password: !isPasswordCorrect
					? 'Password does not meet criteria: minimum 8 characters, at least one capital letter and number.'
					: '',
				passwordRepeated: !isRepeatedPasswordCorrect
					? 'Repeated password does not meet criteria: minimum 8 characters, at least one capital letter and number.'
					: password !== passwordRepeated
					? 'Make sure repeated password is the same as password'
					: '',
			};

			this.setState({
				...this.state,
				registerFormErrors,
				formSubmitted: true,
			});

			return;
		}

		alert('Register correct');
	};

	render(): React.ReactNode {
		const { loading } = this.props;
		const { registerFormFields, registerFormErrors, formSubmitted } = this.state;
		const { login, email, password, passwordRepeated } = registerFormFields;

		return (
			<div className={styles.root}>
				<Input
					label="Login"
					name="login"
					value={login}
					disabled={loading}
					error={registerFormErrors.login}
					handleChange={this.updateField}
					formSubmitted={formSubmitted}
					subtitle="Provide your unique username."
					type="text"
				/>
				<Input
					label="Email"
					name="email"
					value={email}
					disabled={loading}
					error={registerFormErrors.email}
					handleChange={this.updateField}
					formSubmitted={formSubmitted}
					subtitle="Fill with your correct email."
					type="text"
				/>
				<Input
					label="Password"
					name="password"
					value={password}
					disabled={loading}
					error={registerFormErrors.password}
					handleChange={this.updateField}
					formSubmitted={formSubmitted}
					subtitle="Use minimum 8 characters and include at least one number and capital letter."
					type="password"
				/>
				<Input
					label="Repeat password"
					name="passwordRepeated"
					value={passwordRepeated}
					disabled={loading}
					error={registerFormErrors.passwordRepeated}
					handleChange={this.updateField}
					formSubmitted={formSubmitted}
					subtitle="Make sure passwords match each other."
					type="password"
				/>
				<Button
					onClickHandler={this.register}
					label="Create new account"
					className={styles.registerBtn}
					loading={loading}
				/>
				{registerFormErrors.general && <div className={styles.errorMessage}>{registerFormErrors.general}</div>}
			</div>
		);
	}
}

export default RegisterForm;
