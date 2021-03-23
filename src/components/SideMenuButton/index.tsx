import React from 'react';
import cx from 'classnames';

import Icon from 'components/Icon';

import styles from './styles.css';

type PropsType = {
	title: string;
	icon: string;
	active?: boolean;
	onClick: () => void;
};
const SideMenuButton: React.FC<PropsType> = (props: PropsType) => {
	const { title, icon, active, onClick } = props;

	const sideMenuBtnClasses = cx(styles.sideMenuButton, {
		[styles.active]: active,
	});

	return (
		<div className={sideMenuBtnClasses} onClick={onClick}>
			<Icon name={icon} size="medium" className={styles.icon} />
			<div className={styles.title}>{title}</div>
		</div>
	);
};

SideMenuButton.defaultProps = {
	active: false,
};

export default SideMenuButton;
