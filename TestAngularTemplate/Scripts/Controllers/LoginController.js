var LoginController = function ($scope, $routeParams) {
    $scope.loginForm = {
        emailAddress: '',
        password: '',
        rememberMe: false,
        returnUrl: $routeParams.returnUrl
    };

    $scope.login = function () {
        // actually send login - don't know how yet
    };
}

LoginController.$inject = ['$scope', '$routeParams'];