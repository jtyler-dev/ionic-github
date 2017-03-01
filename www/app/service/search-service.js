angular.module('starter.serachService', [])
.factory('SearchService', function($http) {

    var urlBase = 'https://api.github.com/';
    // todo: find out correct place to put auth tokens ionic,
    // this is just a stop gap to get around github api rate limits during dev
    var apiToken = 'TOKEN_GOES_HERE';
    var dataFactory = {};

    dataFactory.getUserProfile = function(userId, callback) {
        $http.get(urlBase+"users/" + userId + "?" + apiToken).success(function (data) {
            callback(data);
        });
    };

    dataFactory.getUserPublicRepos = function(userId, callback) {
        $http.get(urlBase+"users/" + userId + "/repos?" + apiToken).success(function (data) {
            callback(data);
        });
    };

    dataFactory.searchUserList = function(searchQuery, callback) {
        if(searchQuery === "") {
            callback({});
        } else {
            $http.get(urlBase + "search/users?q=" + searchQuery + "&" + apiToken).success(function (data) {
                callback(data.items);
            });
        }
    }

    return dataFactory;
;
});
