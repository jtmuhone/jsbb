
function init(mongoose, mongodb) {

	var Schema = mongoose.Schema;
	mongoose.connect('mongodb://' + mongodb);

	require('./user.js').model(Schema, mongoose);
	require('./post.js').model(Schema, mongoose);
}

module.exports.init = init;