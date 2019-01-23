(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', NarrowItDownService)
.directive('foundItems',NarrowItDownDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");




function NarrowItDownDirective(){
  var ddo = {
    templateUrl: 'founditems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function NarrowItDownDirectiveController() {
  var list = this;
  list.noitemsInList = function () {
    console.log(this);
    if(list.found.length)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService,$http,ApiBasePath) {
  var menu = this;

  menu.narrow_it_down = function(){
    menu.loading = true;
    if(menu.search_term)
    {
      var promise = MenuSearchService.getMenuItems(menu.search_term);
      promise.then(()=>{
        menu.loading = false;
        menu.items = MenuSearchService.showItems();
        console.log(menu.items);
      });
    }
    else
    {
      console.log("no search term");
      menu.loading = false;
      menu.items = [];
    }
      

  }
    
  menu.removeItem = function (itemIndex) {
    menu.items.splice(itemIndex, 1);
    console.log(menu.items);
  };

  menu.items = MenuSearchService.showItems();
    
  

}


NarrowItDownService.$inject = [ 'ApiBasePath','$http'];
function NarrowItDownService( ApiBasePath,$http) {
  var service = this;
  var found = [];

  service.getMenuItems = function (search_term) {
    console.log(found);
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    })
    .then(function (response) {
      found = [];
      var menu_items = response.data.menu_items;
      if(search_term){
        for (var i = 0; i < menu_items.length; i++) {
          var description = menu_items[i].description;
          if (description.toLowerCase().indexOf(search_term.toLowerCase()) !== -1) {
            found.push(menu_items[i]);
          }
        }

      }
      console.log("found",found);

    })
    .catch(function (error) {
    })

    return promise;

  };




  service.showItems = function()
  {
    return found;
  }

}

})();
