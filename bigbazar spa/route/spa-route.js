app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/bigbazar",{
        templateUrl:"bigbazar.html",
        controller : "bigbazarctrl"
    }).when("/kfc",{
        templateUrl : "kfc.html",
        controller : "kfcctrl"
    }).when("/cart",{
        templateUrl : "cart.html",
        controller : "cartctrl"
    }) .otherwise({template:"errorfound"});
})