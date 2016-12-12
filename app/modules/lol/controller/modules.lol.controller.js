var lolCtrl = angular.module('modules.lol.controller', []);

lolCtrl.controller('LolCtrl', ['$scope', function($scope) {
	$scope.moduleInfo = {
			"title": "LoL"
	};
}]);