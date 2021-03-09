/**
 * Validates for valid email
 */
export const isValidEmail = (email: string) => {
	const emailRegex = /\S+@\S+\.\S+/;
	return emailRegex.test(email);
};

/**
 * Validates for valid password - minimum eight characters, at least one letter and one number:
 */
export const isValidPassword = (password) => {
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	return passwordRegex.test(password);
};
