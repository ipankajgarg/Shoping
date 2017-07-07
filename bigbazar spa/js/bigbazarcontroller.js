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
})