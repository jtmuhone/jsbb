
function model(Schema, mongoose) {
	var ObjectId = Schema.ObjectId;
	
	var PostSchema = new Schema({
		author : {type : ObjectId},
		title : {type : String, required: true},
	    body : {type : String, required: true},
	    date : {type : Date, required: true} 
	});
	
	mongoose.model('Post', PostSchema);
}
module.exports.model = model;