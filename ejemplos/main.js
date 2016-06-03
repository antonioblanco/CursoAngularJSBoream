var app = angular.module('App',['ngMessages']);

/*app.provider('UserProvider',['MICONSTANTE', function(MICONSTANTE){
	var url = MICONSTANTE;
	var path = null;
	this.setBasePath = function(newPath){
		path = newPath;
	};

	this.$get = ['UserService', function(UserService){
		var listUser = function(){
			console.log('Ajax to: ' + url + path);
		}
		return{
			listUser: listUser
		}
	}];
}]);

app.config(['UserProviderProvider',function(UserProvider) {
	UserProvider.setBasePath('/user');
}]);

app.run(['UserProvider',function(UserProvider){
	UserProvider.listUser();
}])

app.value('miVariable', 'value'); //variable

app.constant('MICONSTANTE', 'http://localhost:4000');  // constante


app.factory('UserFactory', [function(){ //patron module
	var listUser = function name(){
		return ['Ra','Juan', 'Maria']
	};
	return {
		listUser: listUser
	};
}]);

app.service('UserService', [ function(){ // patron prototype
	this.listUser = function(){
		return ['Ra','Juan', 'Maria']
	};
}])
*/

/*
app.controller('FirstCtrl', [ function(){
	console.log('Factory: ' + UserFactory.listUser());
	console.log('Service: ' + UserService.listUser());
	this.onSubmit = function(){
		if(this.form.$valid){
			alert('Enviado');
		}		
	}
}]);
*/
app.directive('helloClass',[ function(){
	return {
		restrict: 'EA',
		template: '<div>\
					<input type="test" ng-model="mivariable" />\
					<button type="button" ng-click="click({valor: mivariable})">Click</button>\
					</div>',		
		/*scope: true*/
		scope: {
			/*param: '=' paso por referencia*/
			/*param: '@' paso por valor */
			/*param: '&' paso de funcion*/
			param: '@',
			click: '&'
		}

	};
}]);

app.controller('FirstCtrl', [ function(){
	this.name = 'Ra';
	this.onClick= function(text){
		alert("Click " + text);
	};
}]);


