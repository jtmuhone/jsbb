#!/usr/bin/env node

var path = require("path");
var url = require("url");

var express = require("express");
var mongoose = require('mongoose');
var argv = require('optimist')
	.usage("Usage: server.js -p [port] -s [static_files_path]")
    .demand(['p','s'])
    .argv;

require('./js/models/models.js').init(mongoose);
var urls = require('./js/lib/urls.js');

var User = mongoose.model('User');
var Post = mongoose.model('Post');

var app = express.createServer();
var staticPath = path.join(__dirname, argv.s);

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.logger({ format: ':method :url' }));
	app.use('/client', express.directory(staticPath));
	app.use('/client', express.static(staticPath));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	app.use(app.router);
});

app.get('/', function (req, res) {
	res.send({resources: urls.resolve(req, ["client", "rest"])});
});

app.get('/api', function (req, res) {
	res.send({resources: urls.resolve(req, ["users", "posts"])});
});

app.get('/api/users', function (req, res) {
	return User.find(function (err, users) {
		if (!err) {
			return res.send(users);
		} else {
			return console.log(err);
		}
	});
});

app.get('/api/posts', function (req, res) {
	return Post.find(function (err, posts) {
		if (!err) {
			return res.send(posts);
		} else {
			return console.log(err);
		}
	});
});

app.listen(argv.p);

console.log("Server ready, listening in port: " + argv.p);
console.log("Serving static files from: " + staticPath);
