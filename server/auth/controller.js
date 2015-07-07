var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bluebird = require('bluebird');


var AuthController = {
  login: bluebird.method(login),
  logout: logout,
  register: register
}

var secret = 'shhhh';

function login(credentials) {
  console.log(credentials);
  if (!credentials.user || !credentials.pass) {
    throw new Error('invalid credentials');
  }
  var token = jwt.sign({ id: 1, name:'ieltxu' }, secret);

  return {token: token, time: Date.now()};
}

function logout(){

}

function register() {

}

module.exports =  AuthController;
