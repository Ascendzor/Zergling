var locomotive = require('locomotive')
	, Controller = locomotive.Controller
	, http = require('http');

var pagesController = new Controller();

pagesController.main = function() {
	var self = this;
	var options = {
		host: '127.0.0.1',
		path: '/meal/getAllMeals',
		port: 1338,
		method: 'GET'
	}
	console.log('send the request');
	var request = http.request(options, function(response) {
		response.setEncoding('utf8');
		response.on('data', function(data) {
			console.log(data);
			self.products = JSON.parse(data);
			self.render();
		});
	});
	request.on('error', function(error) {
  		console.log('le error T.T');
  		self.products = null;
  		self.render();
	});
	request.end();
}

module.exports = pagesController;