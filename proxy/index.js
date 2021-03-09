const express = require('express');
const morgan = require('morgan');
const { router } = require('./routes');

const app = express();
const port = 3000;

// middleware
app.use(morgan('combined'));
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

server.setTimeout(50000000);
