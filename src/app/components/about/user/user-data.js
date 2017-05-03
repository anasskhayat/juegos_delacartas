(function(angular) {

  angular.module('app').component('componenUser', {
    templateUrl:  'app/components/About/user/user-data-template.html',

    controller: controllerUserForm,

    controllerAs: 'CtrUser'
  });


  function controllerUserForm() {

    var vm = this;
    
    vm.$onInit = function() {
    };

  }

})(angular);