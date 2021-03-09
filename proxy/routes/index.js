const router = require('express').Router();

const { router: loginRoute } = require('./login.js');
const { router: logoutRoute } = require('./logout.js');
const { router: registerRoute } = require('./register.js');

router.use('/', loginRoute);
router.use('/', logoutRoute);
router.use('/', registerRoute);

module.exports = { router };
