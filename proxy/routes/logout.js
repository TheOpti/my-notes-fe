const router = require('express').Router();

router.route('/logout').post((req, res) => {
	res.send('/logout route response');
});

module.exports = { router };
