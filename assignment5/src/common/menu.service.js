(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.fetch_menu_item = function(item_short_name)
  {

    return $http.get(ApiPath + '/menu_items/'+item_short_name+'.json')
    .then(function (response) {
      console.log("menu service "+response.data);
      return response.data;
    },function(errorResponse) {
      return null;
    });


  }

}



})();
