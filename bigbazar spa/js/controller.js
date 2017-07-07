app.controller("myctrl",($scope,myfactory)=>{
    $scope.showclass = false;
   $scope.movex = true; 
    $scope.addsidebar = ()=>{
        $scope.movex = !$scope.movex;
    }
$scope.addstore = ()=>{
    $scope.showclass = !$scope.showclass;
    
}
})