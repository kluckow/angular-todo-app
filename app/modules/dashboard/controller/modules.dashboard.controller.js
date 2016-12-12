var dashboardCtrl = angular.module('modules.dashboard.controller', []);

dashboardCtrl.controller('DashboardCtrl', ['$scope', function($scope) {
	$scope.moduleInfo = {
			"title" : "Dashboard"
	};
}]);