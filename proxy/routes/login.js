const jwt = require('jsonwebtoken');
const router = require('express').Router();
const { user } = require('../store');

router.route('/login').post((req, res) => {
	const { login = '', password = '' } = req.body;

	if (!login || !password) {
		return res.status(400).send({ message: 'Login or password incorrect.' });
	}

	const foundUser = user.findUserByLogin(login);

	if (!foundUser || foundUser.password !== password) {
		return res.status(400).send({ message: 'Login or password incorrect.' });
	}

	const { type } = foundUser;
	const token = jwt.sign({ login, type }, 'proxy');

	return res
		.status(200)
		.cookie('token', token, {
			expires: new Date(Date.now() + 604800000),
			secure: false,
			httpOnly: true,
		})
		.send({ message: 'Logged successfully', user: { login, type } });
});

module.exports = { router };
