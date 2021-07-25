import React, { createContext, useState } from 'react';
import { NotificationsContextType, NotificationType } from 'types/context';

const NotificationsContext = createContext<NotificationsContextType>({
	notifications: [],
	addNotification: () => {},
	removeNotification: () => {},
});

type PropsType = {
	children: React.ReactNode;
};
const NotificationsProvider = (props: PropsType): JSX.Element => {
	const [notifications, setNotifications] = useState<Array<NotificationType>>([]);

	const addNotification = ({ id, title, revocable }) => {
		const newNotifications = [...notifications, { id, title, revocable }];
		setNotifications(newNotifications);

		setTimeout(() => {
			removeNotification(id);
		}, 5000);
	};

	const removeNotification = (id: string) => {
		const updatedNotifications = notifications.filter((notification) => notification.id !== id);
		setNotifications(updatedNotifications);
	};

	return (
		<NotificationsContext.Provider value={{ notifications, addNotification, removeNotification }}>
			{props.children}
		</NotificationsContext.Provider>
	);
};

export { NotificationsContext, NotificationsProvider };
