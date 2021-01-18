export type AuthContextType = {
	login: (login: string, password: string) => Promise<string | null>;
	logout: () => void;
	data: UserType;
};

export type UserType = Record<string, unknown>;
