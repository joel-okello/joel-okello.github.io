(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['MenuDataService'];
function MainMenuAppController(MenuDataService) {
  var mainList = this;
  mainList.$onInit = function () {
    MenuDataService.getAllCategories()
    .then(()=> {
      mainList.categories = MenuDataService.categories();
      console.log(mainList.categories)
    });
  };

  mainList.categories = MenuDataService.categories();

}

})();
