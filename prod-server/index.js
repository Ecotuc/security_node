'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const express = require('express')
var app = (0, _express2.default)();
var port = 3000;

(0, _routes.registerRoutes)(app);

app.get('/', function (req, res) {
  return res.send('Bye World!');
});

app.listen(port, function () {
  return console.log('Prueba asdf app listening at http://localhost:' + port);
});