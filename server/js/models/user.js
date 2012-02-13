
function model(Schema, mongoose) {
	var ObjectId = Schema.ObjectId;
	
	var UserSchema = new Schema({
		id: {type : ObjectId, required: true},
		name : {type : String, required: true},
	    username : {type : String, required: true},
	    password : {type : String, required: true},
	    created : {type : Date, default : Date.now} 
	});
	
	mongoose.model('User', UserSchema);
}
module.exports.model = model;