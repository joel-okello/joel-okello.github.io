(function () {
"use strict";

angular.module('public')
.controller('DisplayInfoController', DisplayInfoController);

DisplayInfoController.$inject = ['SignUpService','ApiPath'];
function DisplayInfoController(SignUpService,ApiPath) {
  var $displayinfo = this;

  $displayinfo.user_info = SignUpService.fetch_user_info(); 

  $displayinfo.user_registered = function()
  {
    console.log(SignUpService.user_registered());
    return SignUpService.user_registered();
  }

  $displayinfo.user_registered = function()
  {
    console.log(SignUpService.user_registered());
    return SignUpService.user_registered();
  }

  $displayinfo.basePath = ApiPath;


  $displayinfo.menuitemsinfo = SignUpService.menuitemsinfo();

}


})();
