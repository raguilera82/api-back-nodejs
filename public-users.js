var express = require('express');

var app = module.exports = express.Router();

var users = require('./users.json');
var roland = require('./github-users/roland.json');
var raguilera82 = require('./github-users/raguilera82.json');
var jmsanchez = require('./github-users/jmsanchez.json');

app.get('/api/public/users', function(req, res) {
  res.status(200).send(users);
});

app.get('/api/public/users/roland', function(req, res) {
  res.status(200).send(roland);
});

app.get('/api/public/users/raguilera82', function(req, res) {
  res.status(200).send(raguilera82);
});

app.get('/api/public/users/jmsanchez', function(req, res) {
  res.status(200).send(jmsanchez);
});
