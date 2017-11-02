var routerApp=angular.module('routerApp',['ui.router','tableController']);

routerApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');
	
	$stateProvider

	.state('home',{
		url:'/home',
		templateUrl: '../templates/intro.html',
		controller: 'namery',
	})
	
	.state('showcase', {
		url: '/showcase',
		templateUrl: '../templates/main.html',
		controller: 'mainCtrl',
	})
});

routerApp.run(['$rootScope','$state',function($rootScope,$state){
	$rootScope.$on('$stateChangeError',function(event,toState,toParams,fromState,fromParams,error){
		$state.go('home');
	})
}]);