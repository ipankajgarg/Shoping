app.controller("bigbazarctrl",function($scope,myfactory){
      promise = myfactory.bigbazarserver();
    promise.then(function(data){
        console.log(data)
       $scope.bigbazardata = data
        console.log(data)
      
    },
                 function(err){
        alert("err")
        
    }
                )
  $scope.total = (count,data)=>{
      alert(count)
      data.count =count;
     console.log(data)
     myfactory.cartproduct(data);
   
  }
    
})