'use strict';
var bluebird = require('bluebird');
var AuthController = bluebird.promisifyAll(require('./controller'));
var router = require('express').Router();

router.post('/register', AuthController.register);
router.post('/login', function(req, res) {
  AuthController.loginAsync({user: req.body.user, pass: req.body.pass})
    .then(function(token){
      console.log(token);
      res.end(token);
    })
    .catch(function(error) {
      console.log('error');
      res.status(401)
      res.end("Invalid credentials");
    });
});
router.post('/logout', AuthController.logout);

module.exports = router;
