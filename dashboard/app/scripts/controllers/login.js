//'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user


app.controller('loginCtrl', function($scope, $http, $cookieStore, $location){
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
                console.log("error");
                if (data.authentication == "success") {
                    // $scope.test = data.authentication;
                    $cookieStore.put("username", $scope.username);
                    $location.path("/root");
                }
            })
            .error(function(data, status, headers, config){
                console.log("error");
                $scope.errorMsg = "Login is not correct, please try again!";
            });
    }
});