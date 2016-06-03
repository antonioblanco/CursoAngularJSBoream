'use strict';
var app = angular.module('App', ['ngMessages']);

app.directive('uiTable', [function(){
    return {
        restrict:'EA',
        template:'<div><h1>Directivas</h1><div ng-transclude>Content</div></div>',
        transclude:true,
        scope: {
           
        }

    };
}]);

app.directive('dni',[function(){
    return{
        restrict:'A',
        link: function(scope,elem, attrs, ctrl){
            ctrl.$validators.dni = function(modelValue, viewValue){
                var numero;
                var letr;
                var letra;
                var expresion_regular_dni;
                expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
                var dni = viewValue;
                if(expresion_regular_dni.test(dni) === true) {
                    numero = dni.substr(0, dni.length - 1);
                    letr = dni.substr(dni.length - 1, 1);
                    numero = numero % 23;
                    letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
                    letra = letra.substring(numero, numero + 1);
                    if(letra != letr.toUpperCase()) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }

            };
        },
        require: 'ngModel'
    };
}]);

/*app.controller('FirstCtrl', ['$q', '$http',function($q, $http){

        var myTimeout = function(seconds){
            var defer =$q.defer();

            setTimeout(function(){
                    defer.resolve(seconds*1000);
            }, seconds*1000);
            return defer.promise;
        };

        var promise = myTimeout(3);

        var success = function(){
            alert("han pasado " + data + 'milisegundos');
        };

        var fail = function(){
            alert("ha fallado");
        };

        promise.then(success,fail);
}]);*/


app.controller('FirstCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

    this.sendEvent= function(){
        $rootScope.$broadcast('FirstCtrlEvent', 1);
    };
    
}]);

// app.controller('SeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    
//     $scope.$on('FirstCtrlEvent', function(event, num){
//         alert('recibido en segundo controlador con valor' + num);
//     });

//     this.sendEvent= function(event, num){
//         $scope.$broadcast('SecondCtrlEvent', 2);
//     };

// }]);

// app.controller('TeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
//      $scope.$on('FirstCtrlEvent', function(event, num){
//         alert('recibido en tercero controlador con valor' + num);
//     });

//      $scope.$on('SecondCtrlEvent', function(event, num){
//         alert('recibido en tercero controlador numero' + num);
//      })
// }]);