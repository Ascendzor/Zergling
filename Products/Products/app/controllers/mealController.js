var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var mealController = new Controller();

mealController.main = function() {
  this.meals = [{name: 'Ratatouille', price: '20.50', grams: '300'}];
  this.render();
}

mealController.addMeal = function() {
	console.log('===============================');
	console.log(this.param('name'));
	console.log(this.param('price'));
	console.log(this.param('grams'));
	this.res.send(200);
}

module.exports = mealController;
