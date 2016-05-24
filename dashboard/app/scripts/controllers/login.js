//'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user


app.controller('loginCtrl', function($scope){
    var user = function(username, password) {
        this.userName = username;
        this.password = password;
    }

    $scope.login = function() {
        alert("success");
    }
});