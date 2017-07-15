app.controller("myctrl",($scope,myfactory)=>{
    $scope.submitform = ()=>{
        var obj = {};
        obj.Dealer_FirstName = $scope.first;
        obj.Dealer_LastName = $scope.second;
        obj.StoreAddress = $scope.location;
        obj.Dealer_Designation = $scope.design;
        obj.Dealer_ContactNo = $scope.number;
        obj.MondayOpeningTime = $scope.monfrom;
        obj.MondayClosingTime= $scope.montill;
        obj.TuesdayOpeningTime = $scope.tuefrom;
        obj.TuesdayClosingTime = $scope.tuetill;
        obj.WednesdayOpeningTime= $scope.wedfrom;
        obj.WednesdayClosingTime= $scope.wedtill;
        obj.ThursdayOpeningTime = $scope.thufrom;
        obj.ThursdayClosingTime = $scope.thutill;
        obj.FridayOpeningTime = $scope.frifrom;
        obj.FridayClosingTime = $scope.fritill;
        obj.SaturdayOpeningTime = $scope.satfrom;
        obj.SaturdayClosingTime = $scope.sattill;
        obj.SundayOpeningTime = $scope.sunfrom;
        obj.SundayClosingTime = $scope.suntill;
        obj.CompanyLegalName = $scope.companylegal;
        obj.companycustomer = $scope.companycustomer;
        obj.PANNumber = $scope.pan;
        obj.BankAccountNumber =$scope.accno;
        obj.BankAccountType =$scope.result;
        obj.BankName = $scope.bankname;
        obj.BankBranch = $scope.bankbranch;
        obj.BankBranchAddress = $scope.bankadd;
        obj.IFSCCode = $scope.ifsc;
        console.log(obj)
        var promise = myfactory.callserver(obj);
       promise.then((data)=>{
				
				console.log(data);
			},(err)=>{
				
				alert("error");
			})
    }
})