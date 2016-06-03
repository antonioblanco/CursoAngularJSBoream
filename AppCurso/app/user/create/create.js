'use strict';
var create = angular.module('app.user.create', ['app.user.list']);



create.controller('ManageCtrl', ['UserFactory','$rootScope','JobFactory', 
	function(UserFactory,$rootScope,JobFactory){
	
	this.jobs = JobFactory.query();

	this.saveUser = function(){	
		var promise = null;
		if(this.user.id){
				promise = this.user.$update();	//UserFactory.editUser(this.user.id, this.user);
			}else{				
				promise = UserFactory.save(this.user);
			}
		promise.$promise.then(function(){			
			this.mensaje="Guardado";
			this.user = null;
			this.form.$setPristine();
			$rootScope.$emit('user:update');
		}.bind(this));
	};

	$rootScope.$on('user:edit', function(event, id){
		this.user = UserFactory.get({id: id});
		this.user.$promise.then(function(){
			this.user.birthdate = new Date(this.user.birthdate);
		}.bind(this));		

	}.bind(this));

}]);