//'use strict';
// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information

app.controller('overviewCtrl', ['$scope', '$http', '$cookies', 'AuthService',
    function($scope, $http, $cookies, AuthService){
        $http({
            url: '/api/profile',
            method: 'GET'
        })
            .success(function(data, status, header, config){
                var file;
                for(file in data.profiles) {
                    console.log(data.profiles[file].username);
                    if(data.profiles[file].username == AuthService.ReadCookie()) {
                        $scope.overviewProfile = data.profiles[file];
                        break;
                    }
                }
            });
    }
]);