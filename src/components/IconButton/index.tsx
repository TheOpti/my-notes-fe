import React from 'react';
import cx from 'classnames';
import Icon from 'components/Icon';
import styles from './styles.css';

type IconButtonPropsType = {
	iconName: string;
	customClassName?: string;
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const IconButton: React.FC<IconButtonPropsType> = (props: IconButtonPropsType) => {
	const { iconName, customClassName, onClick } = props;

	const iconButtonClasses = cx(styles.root, customClassName);

	return (
		<div className={iconButtonClasses} onClick={onClick}>
			<Icon name={iconName} customClassName={styles.icon} />
		</div>
	);
};

IconButton.defaultProps = {
	iconName: '',
	onClick: () => {},
};

export default IconButton;
