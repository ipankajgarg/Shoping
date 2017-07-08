app.factory("myfactory",($http,$q)=>{
  var object = {
      productarray : [],
     bigbazarserver : function(){
         var pr = $q.defer();
         var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/1"
         $http.get(url).then(function(data){
             pr.resolve(data.data.ProductsAvailable)
             console.log("success")
           
         },
                             function(err){
             pr.reject(err)
             console.log("error")
             
         }
         )
         return pr.promise
     } ,
       kfcserver : function(){
         var pr = $q.defer();
         var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/2"
         $http.get(url).then(function(data){
             pr.resolve(data.data.ProductsAvailable)
             console.log("success")
         },
                             function(err){
             pr.reject(err)
             console.log("error")
         }
         )
         return pr.promise
     },
      cartproduct : function(data){
      this.productarray.push(data);
      console.log(this.productarray)
        var json = JSON.stringify(this.productarray);
      localStorage.setItem('cartitems',json);
            console.log(localStorage)
             console.log(this.productarray)
  }
  }
    return object;
})