'use strict';

var crypto = require('crypto');
var User = require('../dbModels/user.model');


exports.autoSignIn = function(username, password, callback)
{
	User.findOne({username:username}, function(e, o) {
		if (o){
			o.password == password ? callback(o) : callback(null);
		}	else{
			callback(null);
		}
	});
}

exports.manualSignIn = function(username, password, callback)
{
	User.findOne({username : username}).exec().then(users => {
		if (users == null) {
			//console.log("one");
			callback('invalid-user');
		}else {
			//console.log("two");
			validatePassword(password, users.password, function(err, res) {
				if (res==true){
					//console.log("two one");
					callback(null,users);
				}	else{
					//console.log("two two");
					callback('invalid-password');
				}
			});
		}
	}).catch(err => {
		//console.log("three");
		callback(err);
	});
}


	/* private encryption & validation methods */

	var generateSalt = function()
	{
		var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ';
		var salt = '';
		for (var i = 0; i < 10; i++) {
			var p = Math.floor(Math.random() * set.length);
			salt += set[p];
		}
		return salt;
	}

	var md5 = function(str) {
		return crypto.createHash('md5').update(str).digest('hex');
	}

	var saltAndHash = function(pass, callback)
	{
		var salt = generateSalt();
		callback(salt + md5(pass + salt));
	}

	var validatePassword = function(plainPass, hashedPass, callback)
	{
		//console.log("inside ValidatePassword  hashed function" + hashedPass);
		//console.log("hashedPass : "+hashedPass);
		var salt = hashedPass.substr(0, 10);
		//console.log("salt : "+salt);
		var validHash = salt + md5(plainPass + salt);
		callback(null, hashedPass === validHash);
	}

	var getObjectId = function(id)
	{
		return new require('mongodb').ObjectID(id);
	}

	var findById = function(id, callback)
	{
		User.findOne({_id: getObjectId(id)},
		function(e, res) {
			if (e) callback(e)
			else callback(null, res)
		});
	}

	var findByMultipleFields = function(a, callback)
	{
		// this takes an array of name/val pairs to search against {fieldName : 'value'} //
		User.find( { $or : a } ).toArray(
			function(e, results) {
				if (e) callback(e)
				else callback(null, results)
			});
		}
