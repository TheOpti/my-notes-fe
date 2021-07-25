export type AuthContextType = {
	login: (login: string, password: string) => Promise<string | null>;
	logout: () => void;
	data: UserType;
	loading: boolean;
	loginLoading: boolean;
	logoutLoading: boolean;
};

export type UserType = {
	login: string;
	type: string;
};

export type NotificationType = {
	id: string;
	title: string;
	revocable: boolean;
};

export type NotificationsContextType = {
	notifications: Array<NotificationType>;
	addNotification: (notification: NotificationType) => void;
	removeNotification: (id: string) => void;
};
