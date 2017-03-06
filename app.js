var app = angular.module("adtExp", ['ngRoute']); //,'directives','ui.bootstrap']);

	app.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/',{templateUrl: 'html/main.html', controller: 'indexCtrl'});
			$routeProvider.when('/block/:no',{templateUrl: 'html/block.html', controller: 'blockInfoCtrl'});
			$routeProvider.when('/tx/:txid',{templateUrl: 'html/tx.html', controller: 'txInfoCtrl'});

			$routeProvider.otherwise({redirectTo: '/'});
		}
	]);

	
