// 'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form

app.controller('contactCtrl',['$scope', '$http',
    function($scope, $http){
        $http({
            method: 'GET',
            url: '/api/location',
        })
        .success(function(data, status, headers, config, statusText){
            //console.log('Success');
            $scope.states = data;
            //console.log($scope.states);
        })
        .error(function(){
            alert('$http call fails');
        });
    }
]);