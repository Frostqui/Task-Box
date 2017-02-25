var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	text : String,
	done: { type: Boolean, default: false },
	created: { type: Date, default: Date.now },
	type: { type: String, default:"Class" },
	 
});