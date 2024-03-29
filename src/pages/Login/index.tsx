import React, { useContext, useState } from 'react';
import cx from 'classnames';

import { AuthContext } from 'context/auth';

import type { AuthContextType } from 'types/context';

import Logo from 'components/Logo';
import Button from 'components/Button';
import LoginForm from 'containers/LoginForm';
import RegisterForm from 'containers/RegisterForm';

import styles from './styles.css';

const FORM_TYPES = {
	LOGIN: 'login',
	REGISTER: 'register',
};

const Login = (): JSX.Element => {
	const [formType, setFormType] = useState<string>(FORM_TYPES.LOGIN);
	const { login, loginLoading }: AuthContextType = useContext<AuthContextType>(AuthContext);

	const toggleActiveSection = (): void => {
		const newFormType = formType === FORM_TYPES.REGISTER ? FORM_TYPES.LOGIN : FORM_TYPES.REGISTER;
		setFormType(newFormType);
	};

	const registerFormActive = formType === FORM_TYPES.REGISTER;
	const switcherSectionTitle = registerFormActive
		? 'No, I already have an account'
		: 'Yes, I would like to create an account';

	const switcherBtnTitle = registerFormActive ? 'Login' : 'Register';

	const containerClasses = cx(styles.container, {
		[styles.registerFormPosition]: registerFormActive,
		[styles.loginFormPosition]: !registerFormActive,
	});

	const registerFormClasses = cx(styles.twoThird, {
		[styles.hidden]: !registerFormActive,
	});

	const loginFormClasses = cx(styles.twoThird, {
		[styles.hidden]: registerFormActive,
	});

	return (
		<div className={styles.login}>
			<Logo customClassName={styles.logo} size={196} />
			<div className={styles.title}>Hello! Is it you first visit?</div>
			<div className={containerClasses}>
				<div className={registerFormClasses}>
					<div className={styles.sectionTitle}>Yeah, sign me in:</div>
					<RegisterForm loading={false} />
				</div>

				<div className={styles.oneThird}>
					<div className={styles.sectionTitle}>{switcherSectionTitle}</div>
					<Button
						disabled={loginLoading}
						onClickHandler={toggleActiveSection}
						classname={styles.button}
						label={switcherBtnTitle}
						color="outlined"
					/>
				</div>

				<div className={loginFormClasses}>
					<div className={styles.sectionTitle}>No, I am already registered:</div>
					<LoginForm loading={loginLoading} handleLogin={login} />
				</div>
			</div>
		</div>
	);
};

export default Login;
