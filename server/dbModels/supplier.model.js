var mongoose = require('mongoose');

var supplier = new mongoose.Schema({
	    fname     : String,
			mname			: String,
      lname     : String,
      email     : String,
			address		: String,
	    contactno : Number,

});
module.exports = mongoose.model('Supplier', supplier);
