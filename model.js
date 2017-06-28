app.factory("myfactory",()=>{
    var object={
        data : function(){
      return [{name:"sell on",link:"seller.flipkart.com"},{name:"advertise",link:"ads.flipkart.com"},{name:"giftcard",link:"flipkart.com"},{name:"24x7 customer care",link:"flipkart.com/helpcentre"}]
        },
        choice : function(){
            return [{name:"shoes"},{name:"tshirt"},{name:"watches"},{name:"shirts"}]
        },
        shoes : function(){
            console.log("hello")
            return [{img:"images/green.jpeg",brand:"locomotive",price:20000},{img:"images/shoe1.jpg",brand:"united colors of benetton",price:1006},{img:"images/shoe2.jpg",brand:"vans",price:1005},{img:"images/shoe3.jpg",brand:"addidas superstar",price:1001},{img:"images/shoe4.jpg",brand:"addidas",price:1003}]
        },
        tshirt : function(){
               return [{img:"images/tshirt1.jpeg"},{img:"images/tshirt2.jpeg"},{img:"images/tshirt3.jpeg"},{img:"images/tshirt4.jpeg"},{img:"images/tshirt5.jpeg"}]
            
        },
         watches : function(){
               return [{img:"images/watch1.jpeg"},{img:"images/watch2.jpeg"},{img:"images/watch3.jpeg"},{img:"images/watch4.jpeg"},{img:"images/watch5.jpeg"}]
            
        },
                shirt : function(){
               return [{img:"images/shirt1.jpeg"},{img:"images/shirt2.jpeg"},{img:"images/shirt3.jpeg"},{img:"images/shirt4.jpeg"},{img:"images/shirt5.jpeg"}]
            
        }
        
        
    }
    return object
})