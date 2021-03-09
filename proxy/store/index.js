function userStore() {
	const users = [
		{
			id: '1',
			login: 'user1',
			email: 'test-user-1@foo.com',
			password: 'pass1',
			type: 'user',
			active: true,
			notes: [],
		},
	];

	function getUsers() {
		return users;
	}

	function findUserByLogin(login) {
		return users.find((user) => user.login === login);
	}

	function addUser(user) {
		users.push(user);
	}

	return { getUsers, findUserByLogin, addUser };
}

const user = userStore();

module.exports = {
	user,
};
