angular.module('search.searchResults', ['starter.serachService'])
.controller('SearchResultsCtrl', function($scope, $http, $stateParams, SearchService) {
    $scope.userObj = {
        userName: '',
        userAvatar: '',
        userLocation: '',
        userCompany: '',
        userEmail: '',
        userBlog: '',
        publicRepos: []
    };


    var userId = $stateParams.userId;

    // get user info
    SearchService.getUserProfile(userId, function(results) {
        $scope.userObj.userName = results.name ? results.name : results.login;
        $scope.userObj.userAvatar = results.avatar_url;
        $scope.userObj.userLocation = results.location ? results.location : "N/A";
        $scope.userObj.userCompany = results.company ? results.company : "N/A";
        $scope.userObj.userEmail = results.email ? results.email : "N/A";
        $scope.userObj.userBlog = results.blog ? results.blog : "N/A";

    });

    // get user public repo information
    SearchService.getUserPublicRepos(userId, function(results) {
        $scope.userObj.publicRepos = results;
    });

});
