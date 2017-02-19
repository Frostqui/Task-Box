var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	text : String,
	done : Boolean,
	created: { type: Date, default: Date.now },
});