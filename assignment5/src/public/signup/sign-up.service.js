(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath','MenuService'];
function SignUpService($http, ApiPath,MenuService) {
  var service = this;
  var user_credentials = {};
  var menuitemsinfo = {};

  var user_is_registered = false;
  var sent_form = false;
  var form_submitted = false;
  var  item_found;

  service.register_user = function(user_info)
  {
    sent_form = true;
    user_credentials = user_info;
     MenuService.fetch_menu_item(user_info.menu_item_name)
    .then(function (response) {
      if(response){
        menuitemsinfo = response;
        user_is_registered = true;
        item_found = true;
      }
      else
      {
        menuitemsinfo = response;
        user_is_registered = false;
        item_found = false;
      }
        
    });


  }

  service.menuitemsinfo = function()
  {
    return menuitemsinfo;
  }

  service.fetch_user_info = function() {
              return user_credentials;
            }
  service.sent_form = function()
  {
    return sent_form;
  }


  service.user_registered = function() {
              return user_is_registered;
            }

 


}



})();
