//'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

app.controller('workCtrl', ['$scope', '$http', '$filter',
    function($scope, $http, $filter){

        //
        $http({
            method: 'GET',
            url: '/api/work',
            //data:
        })
        .success(function(data, status, headers, config, statusText) {
            $scope.workFile = data;
        })

        //
        $scope.displayModel = 'card';

        //
        $scope.searchReset = function() {
            $scope.search.title = "";
            $scope.search.like = "";
            $scope.search.comment = "";
            $scope.search.author = "";
        };

        var orderBy = $filter('orderBy');
        $scope.order = function(prediate, reverse) {
            $scope.workFile.works = orderBy($scope.workFile.works, prediate, reverse);
        }
    }
]);