﻿var angularFormsApp = angular.module('angularFormsApp', ["ngRoute"]);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "app/Home.html",
        controller: "HomeController"
    })
    .when("/newEmployeeForm", {
        templateUrl: "app/EmployeeForm/efTemplate.html",
        controller: "HomeController"
    })
    .otherwise({
        redirectTo: "/home"
    });
});

angularFormsApp.controller("HomeController", function ($scope, $location, DataService) {
    $scope.addNewEmployee = function () {
        $location.path('/newEmployeeForm');
    }
});