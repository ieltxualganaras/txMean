'use strict';
var AuthController = require('./controller');
var router = require('express').Router();

router.post('/register', AuthController.register);
router.post('/login', function(req, res) {
  AuthController.login({user: req.body.user, pass: req.body.pass})
    .then(function(token){
      console.log(token);
      res.json(token);
    })
    .catch(function(error) {
      console.log('error');
      res.status(401)
      res.json({message:"Invalid credentials"});
    })
    .finally(function() {
      res.end();
    });
});
router.post('/logout', AuthController.logout);

module.exports = router;
