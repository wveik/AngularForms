angularFormsApp.controller('efController',
    function EmployeeFormController($scope, $window, DataService) {
        $scope.employee = DataService.employee;

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
                "Инжинер",
                "Маркетинг",
                "Финансовый",
                "Администратор",
        ];

        $scope.submitForm = function () {
            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();
        }

        $scope.cancelForm = function () {

        }
    }
); 