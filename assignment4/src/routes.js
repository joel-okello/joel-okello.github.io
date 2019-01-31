(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('home');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/home',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  .state('test',{
    url:'test',
    template:'<h1>This is a test url <h1>'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainMenuAppController as mainList'
  })

  // .state('item', {
  //   url: '/item/{link}',
  //   templateUrl: 'src/shoppinglist/templates/items.template.html'
    // controller: 'ItemDetailController as itemDetail',
  //   // resolve:
  //   //         {
  //   //           link:['$stateParams',function(){
  //   //                 return $stateParams.link;
  //   //               }]

  //   //         }
  //     })

  .state('item',{
    url:'/item/{link}',
    templateUrl:'src/shoppinglist/templates/test.template.html',
    controller: 'ItemDetailController as itemDetail'
    ,
    resolve:{
              menuitems:['MenuDataService','$stateParams',
              function(MenuDataService,$stateParams)
                {
                  console.log($stateParams.link);
                  return MenuDataService.getItemsForCatergory($stateParams.link);
                }
              ]
            }
  });
}

})();
