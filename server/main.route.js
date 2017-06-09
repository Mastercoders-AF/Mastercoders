'use strict';

app.config(['$routeProvider',function ($routeProvider) {

		$routeProvider.when('/', {
				templateUrl: '../views/login.html',
				controller: 'loginController'
		}).when('/supplier', {
				templateUrl: '../views/sarasa/supplier.html',
				controller: 'supplierController'
		}).when('/supplier/:id', {
				templateUrl: '../views/sarasa/supplier.html',
				controller: 'supplierController'
		}).when('/home_assistance', {
				templateUrl: '../views/home_assistance.html',
				controller: 'homeAssistanceController'
		}).when('/home_chief', {
				templateUrl: '../views/home_chief.html',
				controller: 'homeChiefController'
		}).when('/mailer', {
				templateUrl: '../views/sarasa/send_mail.html',
				controller: 'mailController'
		}).when('/logout', {
				templateUrl: '../views/login.html',
				controller: 'loginController'
		}).otherwise({
				redirectTo: "/homeifgg"
		});
}]);
/* .when('/supplier', {
		templateUrl: '../views/sarasa/viewSupplier.html',
		controller: 'supplierController'
})*/
