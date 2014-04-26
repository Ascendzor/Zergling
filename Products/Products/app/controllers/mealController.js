var locomotive = require('locomotive')
	, Controller = locomotive.Controller;
  
var mealController = new Controller();

mealController.main = function() {
	var self = this;
	this.meals = {};
	mealModel.find({}, function (err, meals) {
		self.meals = meals;
		console.log('re-rendering?');
		console.log(meals);
		self.render();
	});
}

mealController.addMeal = function() {
	console.log('===============================');
	console.log(this.param('name'));
	console.log(this.param('price'));
	console.log(this.param('grams'));
	mealModel.save({name: this.param('name'), price: this.param('price'), grams: this.param('grams')});
	return this.redirect(this.urlFor({ action: 'main' }));
}

module.exports = mealController;
