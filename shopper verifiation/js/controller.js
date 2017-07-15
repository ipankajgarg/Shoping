app.controller("myctrl",($scope,myfactory)=>{
   
   $scope.submitcode = ()=>{
      
       var obj = {};
       obj.FirstName = $scope.firstname;
       obj.LastName = $scope.lastname;
       obj.shopperimage = $scope.shopperimage;
       obj.PhoneNo = $scope.mobilenumber;
       obj.aadharnumber = $scope.aadharnumber;
       obj.aadharimage = $scope.aadharimage;
       obj.license = $scope.license;
       obj.vehiclelicense = $scope.vlicense;
       obj.Vehicle = $scope.vname;
       obj.VehicleSpaceAvailable = $scope.vsize;
       obj.BankAccountNumber = $scope.accountnumber;
       obj.BankAccountType = $scope.result;
       obj.BankName = $scope.bankname;
       obj.BankBranch = $scope.bankbranch;
       obj.BankBranchAddress = $scope.bankaddress;
       obj.IFSCCode = $scope.ifsc;
       var promise = myfactory.callserver(obj);
       promise.then((data)=>{
				
				console.log(data);
			},(err)=>{
				
				alert("error");
			})
			
		}
 
})