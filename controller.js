app.controller("myctrl",($scope,myfactory)=>{
    $scope.data = myfactory.data();
    $scope.choice = myfactory.choice();
    $scope.show1 = function(option){
      console.log(option)
        if(option.name=="shoes"){
            console.log(this.innerHTML)
          $scope.item = myfactory.shoes();  
       }
       else if(option.name=="tshirt"){
            console.log("tshirt")
            $scope.item = myfactory.tshirt();
        }
        else if(option.name=="watches"){
            console.log("tshirt")
            $scope.item = myfactory.watches();
        }
        else{
            console.log("shirt")
            $scope.item = myfactory.shirt();
        }
       
        
      
       
       
    }
})
