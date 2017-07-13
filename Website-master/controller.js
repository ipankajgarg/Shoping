app.controller("myctrl",($scope)=>{
    $scope.hide = false;
    $scope.hidebody = ()=>{
        alert("hidebody")
     $scope.hide = true; 
          window.onload = function () {
    if (typeof history.pushState === "function") {
     
        window.onpopstate = function () {
           $scope.hide = false;
            // Handle the back (or forward) buttons here
            // Will NOT handle refresh, use onbeforeunload for this.
        };
    }
   
}
  
    }
    
    
    
})