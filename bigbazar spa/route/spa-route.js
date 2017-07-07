app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/bigbazar",{
        templateUrl:"bigbazar.html",
        controller : "bigbazarctrl"
    }).when("/kfc",{
        templateUrl : "kfc.html",
        controller : "kfcctrl"
    }).otherwise({template:"errorfound"});
})