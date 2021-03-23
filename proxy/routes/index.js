const router = require('express').Router();
const { allowAuthentication } = require('../middleware/auth');

const { router: loginRoute } = require('./login.js');
const { router: logoutRoute } = require('./logout.js');
const { router: registerRoute } = require('./register.js');
const { router: meRoute } = require('./me.js');

router.use('/', loginRoute);
router.use('/', logoutRoute);
router.use('/', registerRoute);

router.use('/', allowAuthentication, meRoute);

module.exports = { router };
