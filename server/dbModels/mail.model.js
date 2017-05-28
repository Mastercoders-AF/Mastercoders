var mongoose = require('mongoose');

var mail = new mongoose.Schema({
	    from     : String,
			to			: String,
      subject     : String,
      text     : String,

});
module.exports = mongoose.model('Mail', mail);
