import React from 'react';
import cx from 'classnames';

import LoadingSpinner from '../LoadingSpinner';

import styles from './styles.css';

type ButtonPropsType = {
	label: string;
	onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	color?: 'raised' | 'outlined' | 'link';
	className?: string;
	disabled?: boolean;
	loading?: boolean;
};
const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
	const { label, onClickHandler, color, className, disabled, loading, ...rest } = props;

	const disabledState = disabled || loading;

	const btnClasses = cx(styles.root, styles[color], className, {
		[styles.disabled]: disabledState,
	});

	const labelStyles = {
		...(loading ? { paddingLeft: '8px' } : null),
	};

	return (
		<button onClick={onClickHandler} className={btnClasses} type="button" disabled={disabledState} {...rest}>
			<span className={styles.content}>
				{loading && <LoadingSpinner size="small" monocolor />}
				<span style={labelStyles}>{label}</span>
			</span>
		</button>
	);
};

Button.defaultProps = {
	label: '',
	color: 'raised',
	className: '',
};

export default Button;
