// 'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in

app.controller('rootCtrl', function($scope, $cookies, $interval, $location, AuthService){
    // check user name
    if(!AuthService.CheckCookie()){
        $location.path('/login');
    }

    // get login user name
    $scope.loginName = AuthService.ReadCookie();

    // show current real time
    $interval(function(){
        $scope.loginDate = new Date();
    }, 0);

    // log out function
    $scope.logout = function() {
        AuthService.RemoveCookie();
        $location.path('/login');
    }

});
