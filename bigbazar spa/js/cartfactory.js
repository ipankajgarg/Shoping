app.factory("myfactory",()=>{
    var object = {
        
             load : function(){
                 console.log(localStorage)
          usedata = localStorage.getItem("cartproduct")
          var json=JSON.parse(usedata)
          console.log(json)
return json
     },
        filterfunction : function(filterlist){
            console.log(filterlist)
         var finalarr =    filterlist.filter(function(obj){
             return obj.Active == true
         })
           
            console.log(finalarr)
            return finalarr
            
        },
        calculatetotal : function(productarr){
            var sum=0
            for(var i=0;i<productarr.length;i++){
              sum = sum + (productarr[i].Price*productarr[i].count)  
            }
            return sum
        },
        subtotal : function(list){
            return list.Price*list.count;
        }
        
    }
    return object
})