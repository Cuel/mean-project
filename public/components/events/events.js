angular.module('app.events', [])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/events', {
            templateUrl: "components/events/list-events.tmpl.html",
            controller: 'listEventsController'
        }).when('/events/view-event/:eventId', {
            templateUrl: 'components/events/view-event.tmpl.html',
            controller: 'viewEventController',
            resolve: {
                // I will cause a 1 second delay
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 1000);
                    return delay.promise;
                }
            }
        });
    }])

.controller('listEventsController', ['$scope', function ($scope) {
    $scope.eventList = [{
        id: 01,
        fullName: 'CO32 - Operation Mock',
        isCompleted: false,
        occupiedSlots: 6,
        totalSlots: 32,
        createdTime: new Date(),
        startTime: new Date()
    }, {
        id: 02,
        fullName: 'CO32 - Operation Mock2',
        isCompleted: true,
        occupiedSlots: 10,
        totalSlots: 32,
        createdTime: new Date(),
        startTime: "2015-02-11T20:08:00.045Z"
    }];
}])

.controller('viewEventController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.params = $routeParams;
}]);