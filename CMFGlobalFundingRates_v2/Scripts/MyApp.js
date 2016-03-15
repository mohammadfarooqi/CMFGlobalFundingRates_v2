(function () {
    var app = angular.module('myApp', []);

    app.controller('HomeController', ['$scope', function ($scope) {
        $scope.message = 'This';
        $scope.panelView = 'AngularPartials/_panelView.html';
    }]);
})();