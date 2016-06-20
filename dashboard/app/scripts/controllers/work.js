//'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

app.controller('workCtrl', ['$scope', '$http', '$filter', '$uibModal',
    function($scope, $http, $filter, $uibModal){

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


        // open modal

        $scope.workOpen = function (size) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'myModalContent.html',
                controller: 'workCtrl',
                size: size,
                keyboard: true,
                templateUrl:'../templates/confirmBox.html',
                //resolve: {
                //    items: function () {
                //        return $scope.items;
                //    }
                //}
            });
        };

    }
]);