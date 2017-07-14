app.controller("cartctrl",function($scope,myfactory){

  var json= myfactory.load();
    console.log(json)
    $scope.cartproductlist  =json
$scope.totalamount   = myfactory.calculatetotal($scope.cartproductlist)
    
     
 
       

    $scope.deleteproduct = (list)=>{
         console.log(list)
       list.Active = false;
        console.log(list)
     var finalarr =    myfactory.filterfunction($scope.cartproductlist)
     $scope.cartproductlist = finalarr;
        $scope.totalamount = myfactory.calculatetotal($scope.cartproductlist)
         var json = JSON.stringify($scope.cartproductlist)
          localStorage.setItem('cartproduct',json);
          console.log(localStorage)
          myfactory.load();
    }
    
   $scope.updateminus= (list)=>{
      
    console.log(list.count);
    list.count--;
       console.log(list.count);
       
       $scope.totalamount=myfactory.calculatetotal($scope.cartproductlist)
        var json = JSON.stringify($scope.cartproductlist)
          localStorage.setItem('cartproduct',json);
   }
   $scope.updateplus = (list)=>{
     
       console.log(list.count);
       list.count++;
        console.log(list.count);
    $scope.totalamount   = myfactory.calculatetotal($scope.cartproductlist)
     var json = JSON.stringify($scope.cartproductlist)
          localStorage.setItem('cartproduct',json);
   }
   $scope.submitcart = ()=>{
       var obj = {};
       obj.arr = $scope.cartproductlist
      console.log( $scope.cartproductlist)
      var promise = myfactory.callserver( obj)
       promise.then(function(data){
        console.log(data)
    },
                 function(err){
        alert("err")
        
    }
                )
   }
   
   
})