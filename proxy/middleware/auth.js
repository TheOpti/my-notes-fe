const jwt = require('jsonwebtoken');

function allowAuthentication(req, res, next) {
	const token = (req.cookies && req.cookies.token) || '';

	try {
		if (!token) {
			return res.status(401).send({ message: 'You need to Login' });
		}

		const decrypt = jwt.verify(token, 'proxy');

		req.user = decrypt;

		next();
	} catch (err) {
		return res.status(500).send({
			message: 'There was an error during request. Please, try again later.',
			error: err,
		});
	}
}

module.exports = {
	allowAuthentication,
};
