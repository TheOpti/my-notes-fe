const router = require('express').Router();

router.route('/me').get((req, res) => {
	res.send({ user: req.user });
});

module.exports = { router };
