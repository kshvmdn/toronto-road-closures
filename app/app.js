var app = angular.module('app', ['ui.bootstrap']);

// filter to capitalize first letter
app.filter('capitalizeFirst', function() {
	return function(s) {
		return (angular.isString(s) && s.length > 0) ? s[0].toUpperCase() + s.substr(1).toLowerCase() : s;
	}
});
