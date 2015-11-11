angular.module('Gif')

.service('GifService, function($http)' {
	this.searchGif = function(query) {
	console.log("I got it ", query);
	var url = "http://api.giphy.com/vi/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC";
	return $http.get(uri);
	}
}