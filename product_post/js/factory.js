app.factory("myfactory",($http,$q)=>{
            var object = {
            callserver : function(obj){
            var pr = $q.defer()
            var url = "http://ec2-34-208-181-152.us-west-2.compute.amazonaws.com/products/"
            console.log(obj)
            $http.post(url,obj).then(function(data){
                pr.resolve(data.data)
                console.log("success"),
                    function(err){
                    pr.reject(err)
                    console.log("error")
                }
            })
            return pr.promise
            }
            }
            return object
            })