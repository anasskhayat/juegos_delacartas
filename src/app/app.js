"use strict";

(function(angular) {
	var dependenciasProyecto = ["ui.router", "ngAnimate"];

	angular.module("app", dependenciasProyecto);
	angular.module("app").config(["$stateProvider", "$urlRouterProvider",  appConfig]);

	function appConfig($stateProvider, $urlRouterProvider) {
		var main = {
			name: "main",
			url: "/main",
			template: "<view-main></view-main>"
		};

		var detail = {
			name: "detail",
			url: "/detail/:idAnimal",
			params: {
				idAnimal: { squash: true, value: null }
			},
			template: "<view-detail></view-detail>"
		};

		var about = {
			name:"aboutUs",
			url: "/aboutUs",
			template: "<h3>About Us: work in progress</h3>"
		};

		var about = {
			name:"addAnimal",
			url: "/addAnimal",
			template: "<view-add></view-add>"
		};

		$stateProvider.state(main);
		$stateProvider.state(detail);
		$stateProvider.state(about);

		$urlRouterProvider.otherwise("/main");
	}

})(angular);