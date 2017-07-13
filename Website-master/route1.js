

app.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
//    $routeProvider.when("/", {
//        templateUrl : "index.html"
//    })
    $routeProvider.when("/Halanx", {
        templateUrl : "index.html"
    })
    .when("/aboutus", {
        templateUrl : "aboutus.html"
    })
    .when("/contactus", {
        templateUrl : "contactus.html"
    });
});
