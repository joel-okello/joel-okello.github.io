(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://ancient-ocean-51963.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
