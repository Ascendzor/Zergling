var locomotive = require('locomotive')
	, Controller = locomotive.Controller;
  
var mealController = new Controller();

mealController.main = function() {
	var self = this;
	this.meals = {};
	mealModel.find({}, function (err, meals) {
		self.meals = meals;
		self.render();
	});
}

mealController.addMeal = function() {
	mealModel.save({name: this.param('name'), price: this.param('price'), grams: this.param('grams')});
	return this.redirect(this.urlFor({ action: 'main' }));
}

mealController.removeMeal = function() {
	var self = this;
	mealModel.remove({name: this.param('name')});
	self.res.send(200);
}

module.exports = mealController;
