//'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user


app.controller('loginCtrl', function($scope, $http, $location){
    var user = function(username, password) {
        this.userName = username;
        this.password = password;
    }

    $scope.login = function() {
        var users = new user($scope.username, $scope.password);

        $http({
            method: 'POST',
            url: '/api/login',
            data: users
        })
            .success(function(data, status, headers, config, statusText){
                if(data.authentication == "success") {

                    $location.path("/root");
                }
            })
            .error(function(data, status, headers, config, statusText){
                $scope.errorMsg = "Login is not correct, please try again!";
            });

    }
});