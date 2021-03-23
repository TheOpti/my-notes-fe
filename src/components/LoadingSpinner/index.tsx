import React from 'react';
import cx from 'classnames';
import styles from './styles.css';

const sizes = {
	small: '24px',
	medium: '48px',
	large: '64px',
};

type LoadingSpinnerPropsType = {
	size: 'small' | 'medium' | 'large';
	withMask?: boolean;
	monocolor?: boolean;
};
const LoadingSpinner: React.FC<LoadingSpinnerPropsType> = (props: LoadingSpinnerPropsType) => {
	const { size, withMask, monocolor } = props;

	const spinnerSize = sizes[size];

	const circleClasses = cx(
		{
			[styles.colors]: !monocolor,
			[styles.monocolor]: monocolor,
		},
		[styles.path]
	);

	const loader = (
		<svg
			className={styles.spinner}
			width={spinnerSize}
			height={spinnerSize}
			viewBox="0 0 66 66"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle className={circleClasses} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
		</svg>
	);

	if (withMask) {
		return <div className={styles.loaderMask}>{loader}</div>;
	}

	return loader;
};

LoadingSpinner.defaultProps = {
	size: 'medium',
	withMask: false,
	monocolor: false,
};

export default LoadingSpinner;
