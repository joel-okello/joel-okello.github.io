(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/shoppinglist/templates/catergories.template.html',
  bindings: {
    menucomponents: '<'
  }
});

})();
