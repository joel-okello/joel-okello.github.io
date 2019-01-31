(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['MenuDataService','menuitems'];
function ItemDetailController(MenuDataService,menuitems) {
  var itemDetail = this;
  itemDetail.menuitems = menuitems;
  itemDetail.$onInit = function () {
    // MenuDataService.itemurl = menuitems;
    console.log("initialising itemdetail controller");
    console.log(menuitems);

    // MenuDataService.getItemDetail();
  };


}

})();
