var express = require('express');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var morgan = require('morgan');
var path = require('path');

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  dotenv.config({
    silent: true,
  });
}

var app = express();

// for logging http requests
app.use(morgan('tiny'));

app.use('/static', express.static(__dirname + '/../public'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

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
