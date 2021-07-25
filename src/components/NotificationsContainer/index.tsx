import React, { useContext } from 'react';

import styles from './styles.css';
import { NotificationsContextType } from 'types/context';
import { NotificationsContext } from 'context/notifications';
import Notification from 'components/Notification';

const NotificationsContainer: React.FC<> = () => {
	const { notifications, removeNotification }: NotificationsContextType = useContext<NotificationsContextType>(
		NotificationsContext
	);

	if (notifications.length === 0) {
		return null;
	}

	return (
		<div className={styles.root}>
			{notifications.map((notification) => (
				<Notification
					{...notification}
					hideNotification={() => removeNotification(notification.id)}
					key={notification.id}
				/>
			))}
		</div>
	);
};

export default NotificationsContainer;
