﻿var angularFormsApp = angular.module('angularFormsApp', ["ngRoute"]);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "app/Home.html",
        controller: "HomeController"
    })
    .when("/newEmployeeForm", {
        templateUrl: "app/EmployeeForm/efTemplate.html",
        controller: "efController"
    })
    .when("/newEmployeeForm/:id", {
        templateUrl: "app/EmployeeForm/efTemplate.html",
        controller: "efController"
    })
    .otherwise({
        redirectTo: "/home"
    });
});

angularFormsApp.controller("HomeController", function ($scope, $location, DataService) {
    $scope.showCreateEmployeeForm = function () {
        $location.path('/newEmployeeForm');
    }

    $scope.showUpdateEmployeeForm = function (id) {
        $location.path('/newEmployeeForm/' + id);
    }
});