// 'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged
app.factory('AuthService', ['$rootScope', '$cookies',
    function($scope, $cookies){
        return {
            WriteCookie: function(user) {
                $cookies.put("User", user);
            },

            ReadCookie: function() {
                return $cookies.get('User');
            },

            RemoveCookie: function() {
                $cookies.remove('User');
                $scope.user = undefined;
            },

            CheckCookie: function() {
                if($cookies.get('User') === '' || $cookies.get('User') === null || $cookies.get('User') === undefined) {
                    return false;
                }
                $scope.user = $cookies.get('User');
                return true;
            }
        }
    }
]);