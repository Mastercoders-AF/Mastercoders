'use strict';
var SH       = require('../modules/supplierHandaling');
var mongoose = require('mongoose');
module.exports = function(app) {



 app.get('/supplier', function(req, res){
   SH.viewSuppliers(function(output,error){
     //console.log(output +"asdfasf");
     if (!output){
       res.sendStatus(400);
     }	else {
       //console.log("Supplier true :"+output);
       res.json(output);
     }
   });
  });

  app.get('/supplier/:id', function(req, res){
    SH.editSuppliers(req.params.id,function(output,error){
      //console.log(output +"asdfasf");
      if (!output){
        res.sendStatus(500);
      }	else {
        //console.log("Supplier true :"+output);
        res.json(output || {});
      }
    });
   });


  app.post('/supplier', function(req, res){
    SH.addSuppliers(req.body,function(output,error){
      if (!output){
        //console.log(" not work :" +error);
        res.sendStatus(400);
      }	else {
        //console.log("work :"+output);
        res.sendStatus(200);
      }
    });
  });

  app.put('/supplier/:id', (req, res) => {
    console.log("inside put");
    const supplier = req.body;
    delete supplier._id;
    const supplierId = req.params.id;
    SH.updateSuppliers(supplierId,supplier,function(output,error){
      if (!output){
        console.log(" not work :" +error);
        res.sendStatus(400);
      }	else {
        console.log("work :"+output);
        res.json(output);
      }
    });
  });

  app.delete('/supplier/:id',function(req,res){
    console.log("ID : ");
    SH.deleteSuppliers(req.params.id,function(output,error){
      if (!output){
        //console.log(" not work :" +error);
        res.sendStatus(400);
      }	else {
        //console.log("work :"+output);
        res.sendStatus(200);
      }
    });
  });





};
