'use strict';
var list = angular.module('app.user.list', []);

//filtro custom
list.filter('pagination',[function(){
	return function (value,numElemntsList, numelmentsPage) {
		var pages = [];
		var numPages = Math.ceil(numElemntsList/numelmentsPage);
		for(var i=0;i<numPages;i++){
			pages.push(i);
		}
		return pages;
	};
}]);

list.controller('ListCtrl', [ 'UserFactory','$rootScope', function(UserFactory,$rootScope){
	this.removeUser = function(user){
		user.$remove().then(function(){
			updateList();
		}.bind(this));		
	};	

	var updateList = function (){
		this.users = UserFactory.query();		
	}.bind(this);
	

	this.editUser = function(id){		
		$rootScope.$broadcast('user:edit', id);
		
	};
	$rootScope.$on('user:update',updateList);
	
	updateList();
}]);