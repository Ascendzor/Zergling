var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var mealController = new Controller();

mealController.main = function() {
  this.meals = [{name: 'Ratatouille'}];
  this.render();
}

module.exports = mealController;
