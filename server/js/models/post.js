
function model(Schema, mongoose) {
	var ObjectId = Schema.ObjectId;
	
	var PostSchema = new Schema({
		id: {type : ObjectId, required: true},
		author : {type : ObjectId, required: true},
		title : {type : String, required: true},
	    body : {type : String, required: true},
	    date : {type : Date, default : Date.now} 
	});
	
	mongoose.model('Post', PostSchema);
}
module.exports.model = model;