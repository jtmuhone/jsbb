
function model(Schema, mongoose) {
	var ObjectId = Schema.ObjectId;
	
	var PostSchema = new Schema({
		author : ObjectId,
		title : String,
	    body : String,
	    date : Date
	});
	
	mongoose.model('Post', PostSchema);
}
module.exports.model = model;