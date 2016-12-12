var todoApp = angular.module('todoApp',
		[
		 	// external modules
		 	'ngRoute',
		 	// home module
		 	'modules.dashboard.controller',
		 	// todo module
		 	'modules.todo.controller',
		 	'modules.lol.controller',
		 	'modules.todo.directive'
		 	]);

todoApp.config(function ($routeProvider) {
	$routeProvider
	.when('/dashboard', {
		templateUrl: 'app/view/dashboard/dashboard.html',
		controller: 'DashboardCtrl'
	})
	.when('/todo', {
		templateUrl: 'app/view/todo/todo.html',
		controller: 'TodoCtrl'
	})
	.when('/lol', {
		templateUrl: 'app/view/lol/lol.html',
		controller: 'LolCtrl'
	})
	.otherwise({
		redirectTo: '/todo'
	});
});
todoApp.controller('DateCtrl', ['$scope', '$interval', function($scope, $interval) {
	$interval(function() {
		$scope.currentTime = new Date();
	}, 1000);
}]);










