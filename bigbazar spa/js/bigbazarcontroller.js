app.controller("bigbazarctrl",function($scope,myfactory,){

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
  
  $scope.addmodal= (data)=>{
      console.log(data)
     
      $scope.modal = data
      $scope.name = data;
     
  }
  $scope.addtocart = ()=>{
      

       
      console.log($scope.modal)
      console.log($scope.count)

     
   var match =  myfactory.check($scope.modal)
   
       if(match.length==1){
          alert("already present in cart")
       }
      
     
       
   
     else{
       myfactory.cartitems($scope.modal,$scope.count)
        Notification.requestPermission(function(){
            var n = new Notification("Halanx", {
                body : "ADDED TO CART",
                icon : "images/success.png"
            });
           },2000);
      }
  }
  
    
})