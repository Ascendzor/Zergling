var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var mealController = new Controller();

mealController.main = function() {
  this.meals = [{name: 'Ratatouille'}];
  this.drinks = [{name: 'Water'}];
  this.platters = [{name: 'Sushi Platter'}];
  this.render();
}

module.exports = mealController;
