(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  // List of shopping items
  var item = [];
  var categories = [];



  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    var promise = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    })
    .then(function (response) {
      categories = response.data;
    })
    .catch(function (error) {
    })

    return promise;
  };


  service.categories = function()
  {
    return categories;
  };



  service.getItemDetail =function(url)
  {
    return $http({
      method: "GET",
      url: service.itemurl
    })
    .then(function (response) {
        console.log(response.data);
       return item = response.data;
    },
    function (errorResponse) {
        console.log("Error ocurred");
      return item = null;
    });

  }

   service.getItemsForCatergory =function(urlinput)
  {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json?category="+urlinput
    })
    .then(function (response) {
        console.log(response.data);
       return item = response.data;
    },
    function (errorResponse) {
        console.log("Error ocurred");
      return item = null;
    });

  }

  service.item = function()
  {
    return item;
  }

  

  

}

})();
