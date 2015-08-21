var keys = require('../config');
var CLIENT_ID = keys.CLIENT_ID;
var API_KEY = keys.SECRET_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var qs = require('querystring');
var request = require('request');
// var stripe = require("stripe")(API_KEY);
var stripe = require("stripe")(API_KEY);
var express = require('express');
var router = express.Router();
var stripeHandler = require('../stripeHandler');

// Add donor record to DB
router.post('/donor', function(req, res) {
	res.send(req.body);
	//for testing purposes - Adi
  // createAccount(req, res);
});

// Create vendor stripe account and add record to DB
router.post('/vendor', function(req, res) {
  var newAccount = stripeHandler.createStripeAccount(req, res, function(newAccount){
    // TODO Add new record for newAccount to DB
  // TODO Properly communicate success to client
    // res.send(newAccount);
  });
});

// Add shelter record to DB
router.post('/shelter', function(req, res) {
  // console.log(req.body);
  // Touch point for test only -- Ian
  res.send(req.body);
});

module.exports = router;
