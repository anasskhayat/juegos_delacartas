(function(angular) {

  angular.module('app').component('componentHeader', {

    templateUrl:  'app/components/common/header/header-game-template.html',
  
    controller: ['$state',controllerHeader],
  
    controllerAs: 'CtrlHeader'
  });

 
  function controllerHeader($state) {
  
    var vm = this;

    vm.check=function(){

    vm.valorcheck=vm.marcado;
	};

     vm.$onInit = function() {
      vm.headerText = 'empieza el juego';

    };
    vm.goToMain = function() {
      $state.go('main');
    };
  }

})(angular);