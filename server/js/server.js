#!/usr/bin/env node

var path = require("path");
var url = require("url");
var sio = require("socket.io");

var express = require("express");
var mongoose = require('mongoose');
var argv = require('optimist')
	.usage('Usage: server.js -p [port] -s [static_files_path] -m [mongodb_port]')
    .demand(['p', 's', 'm'])
    .argv;

require('./models/models.js').init(mongoose, argv.m);
var urls = require('./lib/urls.js');

var User = mongoose.model('User');
var Post = mongoose.model('Post');

var app = express.createServer();
var staticPath = path.join(process.cwd(), argv.s);
var logFormat =
    ':remote-addr [:date] ":method :url HTTP/:http-version" :status '
    + ':res[Content-Length] ":referrer" ":user-agent"';
    
app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.logger({ format: logFormat }));
	app.use('/', express.static(staticPath));
	app.use('/', express.directory(staticPath));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
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

app.put('/api/posts', function (req, res) {
	var post = new Post(req.body);
	post.save(function (err) {
		if (!err) {
			return res.send({_id : post._id});
		} else { 
			console.log(err);
			return res.send(400);
		}
	});
});

app.delete('/api/posts/:id', function (req, res){
	return Post.findById(req.params.id, function (err, post) {
		return post.remove(function (err) {
			if (!err) {
				return res.send('');
			} else {
				console.log(err);
				return res.send(500);
			}
		});
	});
}); 

var io = sio.listen(app)

io.sockets.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    socket.broadcast.emit('chat message', msg);
  });
});


process.on('SIGINT', function () {
    console.log('Got SIGINT, shutting down server.');
    process.exit()
});

app.listen(argv.p);

console.log("Server ready, listening in port: " + argv.p);
console.log("Serving static files from: " + staticPath);
