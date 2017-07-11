app.controller("myctrl",($scope,myfactory)=>{
  $scope.postdata= ()=>{            
var obj={}
               
obj.ProductName = $scope.productname
   obj.Price = $scope.productprice
               obj.Category = $scope.productcategory
               obj.ProductImage = $scope.image
               obj.productdescription = $scope.productdescription
               obj.ProductSize = $scope.productsize
               obj.availablestores = $scope.availablestores
               console.log(obj)
              var promise =  myfactory.callserver(obj)
               promise.then((data)=>{
                   alert("success")
				console.log(data)
				console.log("Get the Data in Promise...")
			},(err)=>{
				
				console.log("Get the Err in Promise...");
			})
               
               
               
               } 
               })