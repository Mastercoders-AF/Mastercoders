'use strict';
var Supplier = require('../dbModels/mail.model');
var mongoose = require('mongoose');
var MailModel = mongoose.model('Mail');


exports.addMail = function(values, callback)
{
  var mail = new MailModel(values);
    mail.save().then(mail => {
    console.log(mail.to);
    callback(mail);
  }).catch(err => {
    callback(err);
  });
}

exports.viewMail = function(callback)
{
  MailModel.find().populate('mails').exec().then(mails => {
    //console.log("Data :"+suppliers);
    callback(suppliers);
  }).catch(err => {
    //console.log("Error :"+err);
    callback(err);
  });
}

exports.editMail = function(value, callback)
{
  SupplierModel.findById(value).populate('mails').exec().then(supplier => {
      callback(supplier);
   }).catch(err => {
      callback(err);
   });

}

exports.updateMail = function(id,mail, callback)
{
  SupplierModel.findByIdAndUpdate(id, {$set: mail}).then(mailUD => {
      callback(mail);
   }).catch(err => {
      callback(err);
   });

}

exports.deleteMail = function(id, callback)
{
  SupplierModel.remove({_id:id}).then(supplier => {
      callback(supplier);
   }).catch(err => {
      callback(err);
   });

}
