'use strict';

app.factory('loginService',['$http','$location',function ($http, $location) {

  return {
    get : function() {
      $http.get('/').then(function(response){
        if (response.data == "OK") {
          $location.path('/home');
        }
      }).catch(function(response){
        $location.path('/');
      });
    },
    signin : function (login) {
      $http.post('/login',login).then(function(response){
        console.log("Done" +response.data.type);
        if (response.data.type == "chief") {
          $location.path('/home_chief');
        }
        else if (response.data.type == "assistance") {
          $location.path('/home_assistance');
        }
      }).catch(function(response){
        $location.path('/');
      });
    },
    logout : function () {
      $http.post('/logout').then(function(response){
        if (response.data == "OK") {
          $location.path('/');
        }
      }).catch(function(response){
        $location.path('/');
      });
    }

  }
}]);
app.factory('supplierService',['$http','$location',function ($http, $location) {
  return {

    getById: id => $http.get('/supplier/' + id).then(function(response){
      return response.data;
    }).catch(function(response){
      return response.data;
    }),
    get : () =>{
      return $http.get('/supplier').then(function(response){
        return response.data;
      }).catch(function(response){
        return response.data;
      });
    },
    add : function(supplier){
      $http.post('/supplier',supplier).then(function(response){
        if (response.data == "OK") {
          $location.path('/supplier');
        }
      }).catch(function(response){
        $location.path('/');
      });
    },
    update : function(id,supplier){
      $http.put('/supplier/'+id,supplier).then(function(response){
        console.log("success in update :"+response.data );
      }).catch(function(response){
        console.log("Error in update :"+response.data );
      });
    },
    delete: id => $http.delete('/supplier/' + id).then(function(response){
      console.log("Successfully Deleted");
      //return response.data;
    }).catch(function(response){
      console.log(" Error in delete");
      //return response.data;
    })
  }

}]);

app.factory('mailService',['$http','$location',function ($http, $location) {
  return {
    getById: id => $http.get('/mail/' + id).then(function(response){
      return response.data;
    }).catch(function(response){
      return response.data;
    }),
    get : () =>{
      return $http.get('/mail').then(function(response){
        return response.data;
      }).catch(function(response){
        return response.data;
      });
    },
    add : function(mail){
      $http.post('/mail',mail).then(function(response){
        if (response.data == "OK") {
          $location.path('/mailer');
        }
      }).catch(function(response){
        $location.path('/');
      });
    },
    update : function(id,mail){
      $http.put('/mail/'+id,mail).then(function(response){
        console.log("success in update :"+response.data );
      }).catch(function(response){
        console.log("Error in update :"+response.data );
      });
    },
    delete: id => $http.delete('/mail/' + id).then(function(response){
      console.log("Successfully Deleted");
    }).catch(function(response){
      console.log(" Error in delete");
    })
  }

}]);
