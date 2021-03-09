const router = require('express').Router();

router.route('/login').post((req, res) => {
	res.send('/login route response');
});

module.exports = { router };
