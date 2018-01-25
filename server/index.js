var path = require('path');
var morgan = require('morgan');
var dotenv = require('dotenv');
var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  dotenv.config({
    silent: true,
  });
}

var app = express();
var router = express.Router();

// uses body parser to make getting information from request object body easier
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// for logging http requests
app.use(morgan('tiny'));

app.use('/static', express.static(__dirname + '/../public'))

// serve the index html page
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Implement routes
routes(router);

// register the root router for the api links
app.use('/api/v1/', router);

// handle unsupported requests
app.use((req, res, next) => {
  res.status(501).send({
    message: 'That request is not supported'
  });
  next();
});


var port = process.env.PORT;

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
