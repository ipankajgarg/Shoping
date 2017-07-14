app.factory("myfactory",($http,$q)=>{
  var object = {
      productarray : [],
     bigbazarserver : function(){
         var pr = $q.defer();
         var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/1/products"
         $http.get(url).then(function(data){
//             pr.resolve(data.data.ProductsAvailable)
             pr.resolve(data.data)
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
         var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/stores/2/products"
         $http.get(url).then(function(data){
//             pr.resolve(data.data.ProductsAvailable)
             pr.resolve(data.data)
             console.log("success")
         },
                             function(err){
             pr.reject(err)
             console.log("error")
         }
         )
         return pr.promise
     },
      cartitems : function(obj,count){
         
          obj.count = count
          console.log(obj)
          this.productarray.push(obj)
          console.log(this.productarray)
          var json = JSON.stringify(this.productarray)
          localStorage.setItem('cartproduct',json);
          console.log(localStorage)
      },

load : function(){
  var usedata = localStorage.getItem("cartproduct")
          this.productarray=JSON.parse(usedata)
},
     check : function(modal){
       console.log("modal"+modal)
      
      var match =  this.productarray.filter(function(obj){
           return obj.id == modal.id
       })
      
         return match;
      }
   
  }
    return object;
})