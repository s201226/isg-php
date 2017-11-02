var app=angular.module('SGmodule',[]);

app.controller('mainCtrl',function($scope){
	$scope.title="Bacheca";
	$scope.images=[
		{name:'01 (1).png',date:'2017-01-30 15:30',importance:'1'},
		{name:'01 (2).png',date:'2017-01-30 20:15',importance:'3'},
		{name:'01 (3).png',date:'2017-01-31 14:30',importance:'2'},
		{name:'01 (4).png',date:'2017-02-01 15:30',importance:'1'},
		{name:'01 (5).png',date:'2019-01-30 15:30',importance:'4'},
		{name:'01 (6).png',date:'2019-12-30 00:30',importance:'1'}
	];
	$scope.propertyName='date';
	$scope.reverse=true;
	$scope.sortBy=function(propertyName){
		$scope.reverse=($scope.propertyName===propertyName)? !$scope.reverse:true;
		$scope.propertyName=propertyName;
	};
	$scope.w3_open=function(){
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("myOverlay").style.display = "block";
	};
	$scope.w3_close=function(){
		document.getElementById("mySidebar").style.display = "none";
		document.getElementById("myOverlay").style.display = "none";
	};
});