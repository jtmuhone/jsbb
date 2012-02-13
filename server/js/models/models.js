
function init(mongoose) {

	var Schema = mongoose.Schema;
	mongoose.connect('mongodb://127.0.0.1:12345/jsbb');

	require('./user.js').model(Schema, mongoose);
	require('./post.js').model(Schema, mongoose);
}

module.exports.init = init;