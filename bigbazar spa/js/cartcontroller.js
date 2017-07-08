app.controller("cartctrl",function($scope,myfactory){
    $scope.cartproductlist=localStorage.getItem("cartitems");
    console.log($scope.cartproductlist)
   
})