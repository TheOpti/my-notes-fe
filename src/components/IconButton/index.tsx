import React from 'react';
import cx from 'classnames';
import Icon from 'components/Icon';
import styles from './styles.css';

type IconButtonPropsType = {
	iconName: string;
	className?: string;
	iconClassName?: string;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const IconButton: React.FC<IconButtonPropsType> = (props: IconButtonPropsType) => {
	const { iconName, className, iconClassName, onClick } = props;

	const iconButtonClasses = cx(styles.root, className);
	const iconClasses = cx(styles.icon, iconClassName);

	return (
		<div className={iconButtonClasses} onClick={onClick}>
			<Icon name={iconName} className={iconClasses} />
		</div>
	);
};

IconButton.defaultProps = {
	iconName: '',
	iconClassName: '',
	onClick: () => {},
};

export default IconButton;
