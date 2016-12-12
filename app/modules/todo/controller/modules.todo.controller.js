var todoCtrl = angular.module('modules.todo.controller', []);

todoCtrl.controller('TodoCtrl', ['$scope', function($scope) {
	$scope.moduleInfo = {
			"title": "Todo Application (Entwurf)"
	};
	
	// todo list table
	$scope.todoListTableHeaders = [ 
       "Todo", "Beschreibung", "Projekt", "Kategorie", "Erstellt"
    ];
	/** test data begin **/
	$scope.todos = [
	    {
	    	"title" : "Erstelle Todo Liste",
	    	"description" : "Erstelle eine Todo Liste für die Todo Applikation",
	    	"project" : "Todo Application",
	    	"category" : "Organisation",
	    	"created" : "25.09.2015, 13:43"
	    }
	    
	];
	$scope.projects = [
        {
        	"title" : "Project A", "nrOfTodos" : "12"
        },
        {
        	"title" : "Project B", "nrOfTodos" : "6"
        },
        {
        	"title" : "Project C", "nrOfTodos" : "3"
        },
        {
        	"title" : "Project D", "nrOfTodos" : "9"
        }
	];
	$scope.nrOfTodosForProjectA = 14;
	/** test data end **/
}]);