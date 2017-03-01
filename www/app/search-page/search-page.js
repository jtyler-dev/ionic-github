angular.module('search.searchpage', ['starter.serachService'])
.controller('SearchPageCtrl', function($scope,$http,SearchService) {
    $scope.search = {
        userName : ''
    };

    $scope.searchUsers = function() {
        SearchService.searchUserList($scope.search.userName, function (results) {
            $scope.userList = results;
        });
    };
});
