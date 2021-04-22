import React from 'react';
import cx from 'classnames';
import Icon from 'components/Icon';
import styles from './styles.css';

type IconButtonPropsType = {
	iconName: string;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const IconButton: React.FC<IconButtonPropsType> = (props: IconButtonPropsType) => {
	const { iconName, className, onClick } = props;

	const iconButtonClasses = cx(styles.root, className);

	return (
		<div className={iconButtonClasses} onClick={onClick}>
			<Icon name={iconName} className={styles.icon} />
		</div>
	);
};

IconButton.defaultProps = {
	iconName: '',
	onClick: () => {},
};

export default IconButton;
