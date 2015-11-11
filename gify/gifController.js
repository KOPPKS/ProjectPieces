angular.module('Gif')

.controller('GifController', function($scope, gifService) {
	$scope
	$scope.findGif = function() {
		gifService.searchGif($scope.query) 
		.success(function (response) {
		$scope.gifs.response.data[0].images.fixed_width.url

		})


});