(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var $signupCtrl = this;
  var user_info = {};

  
  $signupCtrl.submit = function()
  {
  	user_info.firstname = $signupCtrl.firstname;
  	user_info.lastname = $signupCtrl.lastname;
  	user_info.email = $signupCtrl.email;
  	user_info.phone = $signupCtrl.phone;
    user_info.menu_item_name = $signupCtrl.menu_item_name;
  	SignUpService.register_user(user_info);


  }

  $signupCtrl.user_registered = function() {  return SignUpService.user_registered();
}

  $signupCtrl.form_submitted = function() {
    return SignUpService.sent_form();

  }


}


})();
