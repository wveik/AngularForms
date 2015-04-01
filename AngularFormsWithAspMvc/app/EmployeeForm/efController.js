﻿angularFormsApp.controller('efController',
    function EmployeeFormController($scope, $window, $routeParams, DataService, $modal) {

        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 };

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
                "Инжинер",
                "Маркетинг",
                "Финансовый",
                "Администратор",
        ];

        $scope.submitForm = function () {

            if ($scope.editableEmployee.id == 0) {
                //Вставка нового сотрудника
                DataService.insertEmployee($scope.editableEmployee);
            } else {
                //Редактирование сотрудника
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
            //$window.history.back();

            $modal.window.close();
        }

        $scope.cancelForm = function () {
            //$window.history.back();
            
            $modal.window.dismiss();
        }
    }
); 