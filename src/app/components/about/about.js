(function(angular) {

	angular.module("app").component("componentAbout", {
		templateUrl:  "app/components/About/about-template.html",
		controller: controllerViewAbout,
		controllerAs: "compoViewAbout"
	});
	function controllerViewAbout() {
		var vm = this;
		vm.$onInit = function() {
      
		};
	}

})(angular);