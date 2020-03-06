myApp.controller('taskLogController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.taskLog = $rootScope.tempLogList;

    $scope.$watch('tempLogList', function () {
        $scope.taskLog = $rootScope.tempLogList;
    });
}])