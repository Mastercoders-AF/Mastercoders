'use strict';
var UH       = require('../modules/userHandaling');
var mongoose = require('mongoose');
module.exports = function(app) {

	app.post('/login', function(req, res){
		console.log("username"+req.body['username']);
		UH.manualSignIn(req.body['username'], req.body['password'], function(error, output){
			if (!output){
				//console.log("not done");
				res.sendStatus(400);
			}	else {
				//req.session.user = output;
				if (req.body['remember-me'] == 'on'){
					res.cookie('username', output.username, { maxAge: 900000 });
				}
				res.json(output);
			}
		});
	});
	/*
	app.get('/home', function(req, res) {
		if (req.session.user == null){
			res.redirect('/');
		}	else{
			res.sendStatus(200);
		}
	});*/

	app.get('/logout', function(req, res){
		res.clearCookie('username');
		req.session.destroy();
		console.log(req.session.user);
		res.sendStatus(200);
	});
};
