var locomotive = require('locomotive')
	, Controller = locomotive.Controller;
  
var mealController = new Controller();

mealController.main = function() {
	var self = this;
	this.meals = {};
	mealModel.find({}, function (err, meals) {
		self.meals = meals;
		console.log(meals);
		self.render();
	});
}

mealController.addMeal = function() {
	mealModel.save({name: this.param('name'), price: this.param('price'), grams: this.param('grams')});
	return this.redirect(this.urlFor({ action: 'main' }));
}

module.exports = mealController;
