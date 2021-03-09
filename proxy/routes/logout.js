const router = require('express').Router();

router.route('/logout').post((req, res) => {
	res
		.clearCookie('token', {
			secure: false,
			httpOnly: true,
		})
		.send({
			message: 'Successfully logged out from the application.',
		});
});

module.exports = { router };
