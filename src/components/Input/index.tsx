import React, { useState } from 'react';
import styles from './styles.css';

type PropsType = {
	label: string;
	name: string;
	handleChange?: (event: string, value: string) => void;
	value?: string;
	error?: string;
	formSubmitted?: boolean;
	subtitle?: string;
	type?: string;
};
const Input: React.FC<PropsType> = (props: PropsType) => {
	const { label, name, handleChange, value, error, formSubmitted, subtitle, type = 'text', ...restProps } = props;

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
				type={type}
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
