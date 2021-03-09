import React from 'react';
import cx from 'classnames';
import logo from 'images/image.svg';
import styles from './styles.css';

type PropsType = {
	withTitle?: boolean;
	size?: string | number;
	customClassName?: string;
};
const Logo: React.FC<PropsType> = (props: PropsType) => {
	const { withTitle, size, customClassName } = props;
	const logoClasses = cx(styles.root, customClassName);

	const imageProperties = typeof size === 'string' ? { className: styles[size] } : { width: size, height: size };

	return (
		<div className={logoClasses}>
			<img {...imageProperties} alt="logo" src={logo} />
			{withTitle && <div className={styles.logoText}>MyNotes</div>}
		</div>
	);
};

Logo.defaultProps = {
	withTitle: false,
	size: 'medium',
};

export default Logo;
