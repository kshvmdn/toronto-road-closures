angular.module('app').controller('DataCtrl', function($scope, $http) {
  var url = "http://www1.toronto.ca/transportation/roadrestrictions/RoadRestrictions.json";
  $http.get(url).success(function(data) {
    json = eval(data); // data is JSONP, presented with callback jsonClosureCallback()
    $scope.data = json;
    console.log(json);
  }).error(function(data) {
    $scope.data = "Request failed";
  });
  var jsonClosureCallback = function(data) { return data; }
});