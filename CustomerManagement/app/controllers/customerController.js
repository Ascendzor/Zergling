var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var customerController = new Controller();

customerController.main = function() {
  this.title = 'leCustomer';
  this.render();
}

module.exports = customerController;
