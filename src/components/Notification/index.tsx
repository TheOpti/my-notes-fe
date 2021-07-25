import React from 'react';
import Button from 'components/Button';
import IconButton from 'components/IconButton';

import styles from './styles.css';

type PropsType = {
	title: string;
	revocable?: boolean;
	rollbackAction?: () => void;
	hideNotification: () => void;
};
const Notification: React.FC<PropsType> = (props: PropsType) => {
	const { title, revocable, rollbackAction, hideNotification } = props;

	const rollback = () => {
		rollbackAction?.();
	};

	return (
		<div className={styles.notification} data-testid="notification">
			<div className={styles.content}>
				<div className={styles.title} data-testid="title">
					{title}
				</div>
				{revocable && (
					<Button
						className={styles.rollbackBtn}
						onClickHandler={rollback}
						color="link"
						label="Rollback"
						data-testid="rollback-btn"
					/>
				)}
				<IconButton
					onClick={hideNotification}
					iconName="cancel"
					className={styles.closeIconBtn}
					iconClassName={styles.closeIcon}
				/>
			</div>
			<div className={styles.progressBar} data-testid="progress-bar" />
		</div>
	);
};

export default Notification;
