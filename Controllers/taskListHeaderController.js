myApp.controller('taskListHeaderController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    var taskLogs = JSON.parse(localStorage.getItem('taskLog'));
    var taskList = JSON.parse(localStorage.getItem('taskList'));

    $scope.taskLog = taskLogs ? taskLogs : [];
    $scope.taskList = taskList ? taskList : [];

    $rootScope.tempLogList = $scope.taskLog;
    $rootScope.tempTaskList = $scope.taskList;

    var taskID = 0;

    $scope.addTask = function () {
        taskID = ($scope.taskList && $scope.taskList.length > 0) ?
            $scope.taskList[$scope.taskList.length - 1].taskId + 1 :
            ++taskID;

        $scope.taskList.push({
            "taskId": taskID,
            "taskName": $scope.taskName,
            "taskDate": $scope.taskDate,
            "taskDescription": $scope.taskDescription
        })

        $scope.taskLog.push({
            "event": "ADD",
            "taskName": $scope.taskName,
            "time": new Date().toLocaleDateString()
        })

        $rootScope.tempLogList = $scope.taskLog;
        $rootScope.tempTaskList = $scope.taskList;

        localStorage.setItem("taskList", JSON.stringify($scope.taskList));
        localStorage.setItem("taskLog", JSON.stringify($scope.taskLog));

        clearData();
    }

    var clearData = function () {
        $scope.taskName = "";
        $scope.taskDate = "";
        $scope.taskDescription = "";
    }
}])