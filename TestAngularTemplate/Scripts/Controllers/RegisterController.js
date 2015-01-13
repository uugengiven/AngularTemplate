var RegisterController = function ($scope) {
    $scope.registerForm = {
        emailAddress: '',
        password: '',
        confirmPassword: ''
    };

    $scope.register = function() {
        // todo - register, I don't know how yet
    };
}

RegisterController.$inject = ['$scope'];