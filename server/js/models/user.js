
function model(Schema, mongoose) {
	var ObjectId = Schema.ObjectId;
	
	var UserSchema = new Schema({
		name : {type : String, required: true},
	    username : {type : String, required: true},
	    password : {type : String, required: true},
	    created : {type : Date, default : Date.now} 
	});
	
	mongoose.model('User', UserSchema);
}
module.exports.model = model;