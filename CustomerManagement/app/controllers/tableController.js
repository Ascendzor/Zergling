var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var tableController = new Controller();

tableController.main = function() {
  this.title = 'leTable';
  this.render();
}

module.exports = tableController;
