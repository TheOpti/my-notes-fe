import React from 'react';
import cx from 'classnames';
import styles from './styles.css';

type IconPropsType = {
	name: string;
	size?: string;
	className?: string;
};
const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
	const { name, size, className } = props;

	const iconClasses = cx(styles.root, styles[size], styles[name], className);

	return <i className={iconClasses} data-testid={`icon-${name}`} />;
};

Icon.defaultProps = {
	size: 'medium',
	className: '',
};

export default Icon;
