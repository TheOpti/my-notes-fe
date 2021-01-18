import React, { PureComponent } from 'react';
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

class Login extends PureComponent {
	state = {
		activeForm: FORM_TYPES.LOGIN,
	};

	switchActiveSection = (): void => {
		const { activeForm } = this.state;

		if (activeForm === FORM_TYPES.REGISTER) {
			this.setState({ activeForm: FORM_TYPES.LOGIN });
		} else {
			this.setState({ activeForm: FORM_TYPES.REGISTER });
		}
	};

	render(): React.ReactNode {
		const { activeForm } = this.state;

		const registerFormActive = activeForm === FORM_TYPES.REGISTER;
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
				<div className={styles.root}>
					<Logo customClassName={styles.logo} size="large" />
					<div className={styles.title}>Is it you first visit?</div>
					<div className={containerClasses}>
						<div className={registerFormClasses}>
							<div className={styles.sectionTitle}>Yeah, sign me in:</div>
							<RegisterForm />
						</div>

						<div className={styles.oneThird}>
							<div className={styles.sectionTitle}>{switcherSectionTitle}</div>
							<Button
								onClickHandler={this.switchActiveSection}
								classname={styles.switcherBtn}
								label={switcherBtnTitle}
								color="outlined"
							/>
						</div>

						<div className={loginFormClasses}>
							<div className={styles.sectionTitle}>No, I am already registered:</div>
							<AuthContext.Consumer>
								{({ login }: AuthContextType) => <LoginForm handleLogin={login} />}
							</AuthContext.Consumer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
