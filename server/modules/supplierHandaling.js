'use strict';
var Supplier = require('../dbModels/supplier.model');
var mongoose = require('mongoose');
var SupplierModel = mongoose.model('Supplier');


exports.viewSuppliers = function(callback)
{
  SupplierModel.find().populate('suppliers').exec().then(suppliers => {
    //console.log("Data :"+suppliers);
    callback(suppliers);
  }).catch(err => {
    //console.log("Error :"+err);
    callback(err);
  });
}
exports.addSuppliers = function(values, callback)
{
  console.log("calling");
  var supplier = new SupplierModel(values);
    supplier.save().then(supplier => {
    //console.log(supplier.fname);
    callback(supplier);
  }).catch(err => {
    callback(err);
  });
}

exports.editSuppliers = function(value, callback)
{
  console.log(" edit handling calling");
  SupplierModel.findById(value).populate('suppliers').exec().then(supplier => {
      callback(supplier);
   }).catch(err => {
      console.error("Error inside handling"+err);
      callback(err);
   });

}

exports.updateSuppliers = function(id,supplier, callback)
{
  console.log(" update handling calling");
  SupplierModel.findByIdAndUpdate(id, {$set: supplier}).then(supplierUD => {
      callback(supplier);
   }).catch(err => {
      console.error("Error inside update handling"+err);
      callback(err);
   });

}

exports.deleteSuppliers = function(id, callback)
{
  console.log(" Delete handling calling");
  SupplierModel.remove({_id:id}).then(supplier => {
      callback(supplier);
   }).catch(err => {
      console.error("Error inside Delete handling"+err);
      callback(err);
   });

}

/*
DriverModel.findByIdAndUpdate(driverId, {$set: driver}).then(driverDb => {
    res.json(driver);
}).catch(err => {
    console.error(err);
    res.sendStatus(500);
});
*/
