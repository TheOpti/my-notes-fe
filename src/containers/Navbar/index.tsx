import React from 'react';
import IconButton from 'components/IconButton';
import Logo from 'components/Logo';

import styles from './styles.css';

const Navbar = (): JSX.Element => {
	return (
		<div className={styles.navbar}>
			<IconButton iconName="menu" onClick={() => {}} customClassName={styles.iconButton} />
			<Logo customClassName={styles.logo} withTitle size="small" />
			<div className={styles.input}>Input</div>
			<div className={styles.buttons}>
				<IconButton iconName="arrows-cw" onClick={() => {}} customClassName={styles.iconButton} />
				<IconButton iconName="th" onClick={() => {}} customClassName={styles.iconButton} />
				<IconButton iconName="cog" onClick={() => {}} customClassName={styles.iconButton} />
			</div>
			<IconButton iconName="user" onClick={() => {}} customClassName={styles.iconButton} />
		</div>
	);
};

export default Navbar;
