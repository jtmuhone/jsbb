var mongoose = require('mongoose');

require('./models/models.js').init(mongoose);
var User = mongoose.model('User');
var Post = mongoose.model('Post');

var user = new User();
user.name = "Joonas Muhonen";
user.username = "jtm";
user.password = "foobar"
user.created = new Date();
user.save(function(err) {
	if (err) {
		throw err;
    } else {
        console.log("User " + user.name + " saved.");
    }
});

var post = new Post();
post.author = user.id;
post.title = 'blahblah';
post.body = "Foobar";

post.save(function(err) {
	if (err) {
		throw err;
    } else {
        console.log("Post " + post.title + " saved.");
    }
});

