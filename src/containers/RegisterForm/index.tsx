import React, { Component } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import styles from './styles.css';

type PropsType = Record<string, never>;

type StateType = {
  [fieldName: string]: string
}

class RegisterForm extends Component<PropsType, StateType> {
  state = {
    login: '',
    password: '',
    passwordRepeated: '',
  };

  updateField = (fieldName: string, value: string): void => {
    this.setState({
      [fieldName]: value,
    });
  };

  register = (): void => {
    console.log('Register function');
  };

  render(): React.ReactNode {
    const { login, password, passwordRepeated } = this.state;

    return (
      <div className={styles.root}>
        <Input
          label="Login"
          name="login"
          value={login}
          handleChange={this.updateField}
        />
        <Input
          label="Password"
          name="password"
          value={password}
          handleChange={this.updateField}
        />
        <Input
          label="Repeat password"
          name="passwordRepeated"
          value={passwordRepeated}
          handleChange={this.updateField}
        />
        <Button
          onClickHandler={this.register}
          label="Create new account"
          classname={styles.registerBtn}
        />
      </div>
    )
  }
}

export default RegisterForm;
