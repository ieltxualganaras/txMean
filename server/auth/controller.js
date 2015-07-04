var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


var AuthController = {
  login: login,
  logout: logout,
  register: register
}

var secret = 'shhhh'

function login(credentials) {
  console.log(credentials);
  if (!credentials.user || !credentials.pass) {
    throw new Error('invalid credentials')
  }
  var token = jwt.sign({ id: 1, name:'ieltxu' }, secret);

  return {token: token, time: Date.now()};
}

function logout(){

}

function register() {

}

//AuthController.prototype = bluebird.promisifyAll(AuthController.prototype, {suffix: ''});

module.exports = AuthController;
