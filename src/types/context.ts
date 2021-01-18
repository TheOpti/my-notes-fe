
export type AuthContextType = {
	login: () => void;
	logout: () => void;
	data: UserType;
}

export type UserType = Record<string, unknown>;
