(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListBuyItemController', ShoppingListBuyItemController)
.service('ShoppingListService', ShoppingListService);

ShoppingListBuyItemController.$inject = ['ShoppingListService'];
function ShoppingListBuyItemController(ShoppingListService) {
  var shopping = this;
  shopping.purchase = function (itemIdex) {
    ShoppingListService.addBoughtItem(itemIdex);
    ShoppingListService.removeToBuyItem(itemIdex);
  }
  shopping.ToBuyItems = ShoppingListService.getToBuyItems();
  shopping.BoughtItems = ShoppingListService.getBoughtItems();
  
}

function ShoppingListService() {
  var service = this;

  // List of bought items
  var bought = [];

  //List of not bought items
 var to_buy = [
     {name:"Sweet Sugar"},
     {name:"Bitter Butter"},
     {name:"Cheese Walt"},
     {name:"Sweet Bread"}
    ]




  service.addBoughtItem = function (itemIdex) {

    var itemBought = to_buy[itemIdex];
    bought.push(itemBought);
  };

  service.removeToBuyItem = function (itemIdex) {
    to_buy.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return to_buy;
  };

  service.getBoughtItems = function () {
    return bought;
  };
}

})();
