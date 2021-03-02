import React, { useState } from 'react';
import styles from './styles.css';

type InputPropsType = {
	label: string;
	name: string;
	handleChange?: (event: string, value: string) => void;
	value?: string;
	error?: string;
	formSubmitted?: boolean;
	subtitle?: string;
};
const Input: React.FC<InputPropsType> = (props: InputPropsType) => {
	const { label, name, handleChange, value, error, formSubmitted, subtitle, ...restProps } = props;

	const [visited, setVisited] = useState(false);

	const updateFormValue = (event) => {
		const { value } = event.target;
		handleChange(name, value);
	};

	const onBlurHandler = () => {
		setVisited(true);
	};

	const canShowError = visited || formSubmitted;

	return (
		<div className={styles.root}>
			<input
				className={styles.input}
				onChange={updateFormValue}
				onBlur={onBlurHandler}
				value={value}
				required
				{...restProps}
			/>
			<div className={styles.highlight} />
			<label className={styles.label}>{label}</label>
			{subtitle && !error && <div className={styles.subtitle}>{subtitle}</div>}
			{canShowError && error && <div className={styles.errorMsg}>{error}</div>}
		</div>
	);
};

Input.defaultProps = {
	value: '',
	error: '',
	formSubmitted: false,
};

export default Input;
