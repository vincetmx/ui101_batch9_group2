//'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user


app.controller('loginCtrl', function($scope, $http){
    var user = function(username, password) {
        this.userName = username;
        this.password = password;
    }

    $scope.login = function() {
        var users = new user($scope.username, $scope.password);

        $http({
            method: 'POST',
            url: 'http://localhost:3000/api/login',
            data: users
        })
            .success(function(data, status, headers, config){
                alert("error");
            })
            .error(function(data, status, headers, config){
                alert("error");
                $scope.errorMsg = "Login is not correct, please try again!";
            });
    }
});