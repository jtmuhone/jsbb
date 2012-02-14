var application_root = ".";
var express = require("express");
var path = require("path");
var mongoose = require('mongoose');

require('./models/models.js').init(mongoose);
var User = mongoose.model('User');
var Post = mongoose.model('Post');

var app = express.createServer();

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root, "public")));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/rest', function (req, res) {
	console.log(req.url);
	res.send({resources: ["users", "posts"]});
});

app.get('/rest/users', function (req, res) {
	return User.find(function (err, users) {
		if (!err) {
			return res.send(users);
		} else {
			return console.log(err);
		}
	});
});

app.get('/rest/posts', function (req, res) {
	return Post.find(function (err, posts) {
		if (!err) {
			return res.send(posts);
		} else {
			return console.log(err);
		}
	});
});

app.listen(1337);
