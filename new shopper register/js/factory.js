app.factory("myfactory",($http,$q)=>{
            var object = {
            callserver : function(obj){
            var pr = $q.defer()
            var url = ""
            console.log(obj)
            $http.post(url,{data:obj}).then(function(data){
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
