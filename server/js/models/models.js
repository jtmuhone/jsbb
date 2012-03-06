
function init(mongoose) {

	var Schema = mongoose.Schema;

	require('./user.js').model(Schema, mongoose);
	require('./post.js').model(Schema, mongoose);
}

module.exports.init = init;