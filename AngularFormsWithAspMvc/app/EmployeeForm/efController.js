angularFormsApp.controller('efController',
    function EmployeeFormController($scope, DataService) {
        $scope.employee = DataService.employee;

        $scope.departments = [
                "Инжинер",
                "Маркетинг",
                "Финансовый",
                "Администратор",
        ];

        $scope.submitForm = function () {
            
        }
    }
); 