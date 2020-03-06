myApp.controller('taskListController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.taskList = $rootScope.tempTaskList;

    $scope.$watch('tempTaskList', function () {
        $scope.taskList = $rootScope.tempTaskList;
    })

    $rootScope.deleteTask = function (index, task) {
        $rootScope.tempTaskList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify($rootScope.tempTaskList));
        $rootScope.tempLogList.push({
            "event": "DELETED",
            "taskName": task.taskName,
            "time": new Date().toLocaleDateString()
        });
        localStorage.setItem("taskLog", JSON.stringify($rootScope.tempLogList));
    }
}])