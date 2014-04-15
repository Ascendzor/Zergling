var locomotive = require('locomotive')
	, Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
	this.test = 'le test';
	
	this.products = [
		{ name: 'prawn', price: '10.00' },
		{ name: 'pig', price: '5.00' },
		{ name: 'chicken', price: '3.00' },
		{ name: 'cow', price: '2.00' }
	]
	
	this.render();
}

module.exports = pagesController;