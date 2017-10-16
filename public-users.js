var express = require('express');

var app = module.exports = express.Router();

var users = require('./users.json');

app.get('/api/public/users', function(req, res) {
  res.status(200).send(users);
});
