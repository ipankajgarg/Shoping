app.controller("myctrl",($scope,myfactory)=>{
    if(localStorage.cartproduct){
var usedata = localStorage.getItem("cartproduct")
          myfactory.productarray=JSON.parse(usedata)
    }

    $scope.showclass = false;
   $scope.movex = true; 
    $scope.addsidebar = ()=>{
        $scope.movex = !$scope.movex;
    }
$scope.addstore = ()=>{
    $scope.showclass = !$scope.showclass;
    
}
})