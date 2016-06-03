'use strict';
var user = angular.module('app.user', ['app.user.list','app.user.create']);

user.controller('UserCtrl', [ function(){
	
}]);

user.constant('API_URL','http://45.32.235.206:8000/api');

user.factory('JobFactory',['$resource','API_URL',function($resource,API_URL){
	return $resource(API_URL + '/jobs');
}]);

user.factory('UserFactory',['$resource','API_URL',function($resource,API_URL){
	return $resource(API_URL + '/users/:id', {id: '@id'},{
		update:{
			method: 'PUT',
			params: {
				id: '@id'
			}
		}
	});
}]);