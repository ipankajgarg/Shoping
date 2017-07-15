app.factory("myfactory",($http,$q)=>{
    var object = {
        callserver : function(obj){
            console.log(obj)
            var pr = $q.defer();
				var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/shoppers/";
            console.log(obj);
				$http.post(url,obj).then(function(data){
					pr.resolve(data);
					console.log("Data is Success...",data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Data is Error");
					});
            return pr.promise;
				}
				
        
    }
    return object
})