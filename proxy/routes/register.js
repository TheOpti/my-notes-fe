const router = require('express').Router();
const { user } = require('../store');

router.route('/register').post((req, res) => {
	const { login, email, password, repeatedPassword } = req.body;

	const passwordOk = password && repeatedPassword && password === repeatedPassword;
	const credentialsCorrect = login && email && passwordOk;

	if (!credentialsCorrect) {
		return res.status(400).send({ message: 'Please check if all fields are filled correctly.' });
	}

	if (user.findUserByLogin(login)) {
		return res.status(400).send({ message: 'This login/email is already taken.' });
	}

	user.addUser({
		login,
		password,
		email,
		type: 'user',
	});

	return res.status(200).send({ message: 'Your account was created successfully. You can now login.' });
});

module.exports = { router };
