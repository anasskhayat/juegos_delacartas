(function(angular) {

  angular.module('app').component('componentFooter', {
    templateUrl:  'app/components/common/footer/footer-game-template.html',
  
    controller: ['$state',controllerFooter],
    controllerAs: 'CtrlFooter'
  });


  function controllerFooter($state) {
  
    var vm = this;
    
    vm.$onInit = function() {
      vm.footerText = '@Todos los derechos reservados 2017';

    };

  }

})(angular);