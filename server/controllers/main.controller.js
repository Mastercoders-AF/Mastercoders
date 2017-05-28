'use strict';

app.controller('loginController',['$scope','loginService', function($scope,loginService){
  $scope.loginCheck = function(login){

    loginService.signin(login);

  };
}]);

app.controller('homeAssistanceController',['$scope','loginService','supplierService','$location',function ($scope,loginService,supplierService,$location) {
  $scope.homeAssistance = function(){
    $location.path('/home_assistance');
  }
  $scope.logout = function(){
    loginService.logout();
  }
}]);

app.controller('homeChiefController',['$scope','loginService','supplierService','$location',function ($scope,loginService,supplierService,$location) {
  $scope.homeChief = function(){
    $location.path('/home_chief');
  }
  $scope.getsupplier= function(){
    $location.path('/supplier');
  }
  $scope.getMail= function(){
    $location.path('/mailer');
  }
  $scope.logout = function(){
    loginService.logout();
  }

}]);

app.controller('supplierController',['$scope','supplierService','loginService','$location','$routeParams', function($scope,supplierService,loginService,$location,$routeParams){
  $scope.homeChief = function(){
    $location.path('/home_chief');
  }
  $scope.getsupplier = function(){
    $location.path('/supplier');
  }
  $scope.getMail= function(){
    $location.path('/mailer');
  }
  function viewSup(){
    supplierService.get().then(function(data){
      $scope.suppliers = data;
    });
  }

  viewSup();
  //Add
  $scope.addSupplier = function(supplier){
    supplierService.add(supplier);
    Alert.render("Successfully Inserted");
    viewSup();
    $scope.supplier= null;
  }
  //Update
  $scope.updateSupplier = function(id,supplier){
    supplierService.update(id,supplier);
    Alert.render("Successfully Updated");
    $scope.supplier= null;
    viewSup();
  }
  //Edit
  $scope.editSup = function(id){
    supplierService.getById(id).then(data => {
      $scope.supplier = data;
    });
    viewSup();
    //$scope.supplier= null;
  }
  //Delete
  $scope.deleteSupplier = function(id){
    supplierService.delete(id);
    Alert.render("Successfully Deleted");
    viewSup();
    //$scope.supplier= null;
  }
  //Clear
  $scope.clear=function(){
      $scope.supplier=null;
  }
  //Logout
  $scope.logout = function(){
    loginService.logout();
  };


}]);

app.controller('mailController',['$scope','loginService','supplierService','mailService','$location',function ($scope,loginService,supplierService,mailService,$location) {
  $scope.homeChief = function(){
    $location.path('/home_chief');
  }
  $scope.getsupplier= function(){
    $location.path('/supplier');
  }
  $scope.getMail= function(){
    $location.path('/mailer');
  }
  $scope.logout = function(){
    loginService.logout();
  }
  function viewSup(){
    supplierService.get().then(function(data){
      $scope.suppliers = data;
    });
  }
  viewSup();
  $scope.sendMail = function(mail){
    mailService.add(mail);
    //Alert.render("Successfully Inserted");
    //viewSup();
    $scope.mail= null;
  }



}]);
