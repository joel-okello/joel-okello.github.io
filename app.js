(function () {
'use strict';

angular.module('assignment_one', [])

.controller('lunch-menu-controller',Lunch_menu_controller);
Lunch_menu_controller.$inject = ['$scope', '$filter'];
function Lunch_menu_controller ($scope, $filter) {
  $scope.display_message = function () {
  	var dishes_entered = $scope.dishes;
    var dishes_array = dishes_entered.split(',');
    if(dishes_entered == "")
    {
    	$scope.message = "Please enter data first";
    	return
    }

    if(dishes_array.length>3)
    {
    	$scope.message = "Too much!";
    }
	else
	{
		$scope.message = "Enjoy!";
	}

  };

}


})();