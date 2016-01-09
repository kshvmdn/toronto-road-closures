angular.module('app').controller('DataCtrl', function($scope, $http) {

  $scope.currentPage = 1;
  $scope.numPerPage = 10;
  $scope.maxSize = 5;

  var url = "http://www1.toronto.ca/transportation/roadrestrictions/RoadRestrictions.json";

  $http.get(url).success(function(data) {
    json = eval(data); // data is JSONP, presented with callback jsonClosureCallback()
    $scope.closures = json['Closure'];
    console.log(json);
  }).error(function(data) {
    $scope.closures = {};
    console.log('Request failed')
  });
  var jsonClosureCallback = function(data) { return data; }
});