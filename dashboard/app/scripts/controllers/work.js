//'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

app.controller('workCtrl', ['$scope', '$http',
    function($scope, $http){
        $http({
            method: 'GET',
            url: '/api/work',
            //data:
        })
            .success(function(data, status, headers, config, statusText) {
                $scope.works = data;
            })
            .error(function() {

            });
    }
]);