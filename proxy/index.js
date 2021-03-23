const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { router } = require('./routes');

const app = express();
const port = 3000;

// middleware
app.use(morgan('combined'));
app.use(
	cors({
		origin: 'http://localhost:8080',
		allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Token'],
		methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
		credentials: true,
	})
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
	setTimeout(next, 1500);
});

// basic route
app.get('/', (req, res) => {
	res.send('Hello from proxy');
});

app.use(router);

const server = app.listen(port, () => {
	console.log(`Proxy server listening at http://localhost:${port}`);
});
