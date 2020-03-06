var myApp = angular.module('taskApp', [])

    .directive('taskHeader', function () {
        return {
            templateUrl: './Directives/taskListHeader.html',
            controller: 'taskListHeaderController'
        }
    })

    .directive('taskList', function () {
        return {
            templateUrl: './Directives/taskList.html',
            controller: 'taskListController'
        }
    })

    .directive('taskLog', function () {
        return {
            templateUrl: './Directives/taskLog.html',
            controller: 'taskLogController'
        }
    })

