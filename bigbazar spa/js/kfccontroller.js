app.controller("kfcctrl",function($scope,myfactory){
      promise = myfactory.kfcserver();
    promise.then(function(data){
        console.log(data)
       $scope.kfcdata = data
        console.log(data)
       
    },
                 function(err){
        alert("err")
        
    }
                )
})