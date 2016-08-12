angular
.module('app')
.controller('ToDoListController', function($scope){
	//$scope.taskItem = "";
	//$scope.taskPriority = "";
	$scope.submitTask = submitTask;
	$scope.taskList = [];
	$scope.toDo = {};

	function submitTask(){
		$scope.taskList.push(angular.copy($scope.toDo));
		console.log($scope.toDo);
		$scope.toDo.name = "";
	}
}); 