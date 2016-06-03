'use strict';
var application = angular.module('Application',
	['ngMessages','ngResource','ui.router','app']);

application.config(['$stateProvider',function($stateProvider) {
	
	$stateProvider
		.state('app',{
			url: '/app',
			controller: 'AppCtrl as appCtrl',
			templateUrl: 'app/app.html'	})
			
		.state('app.user',{
			url: '/user',
			controller: 'UserCtrl as userCtrl',
			templateUrl: 'app/user/user.html'	})
			
		.state('app.user.list',{
			url: '/list',
			controller: 'ListCtrl as listCtrl',
			templateUrl: 'app/user/list/list.html'	})
			
		.state('app.user.create',{
			url: '/create',
			controller: 'ManageCtrl as manageCtrl',
			templateUrl: 'app/user/create/create.html'	})
			
		

}]);





