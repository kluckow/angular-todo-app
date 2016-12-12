var todoDirectives = angular.module('modules.todo.directive', []);

todoDirectives.directive('todoListTable', function() {
	return {
		templateUrl: 'app/view/todo/partials/todo-list-table.html'
	};
});