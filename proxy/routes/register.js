const router = require('express').Router();

router.route('/register').post((req, res) => {
	res.send('/register route response');
});

module.exports = { router };
