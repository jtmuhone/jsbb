#!/usr/bin/env node

var path = require("path");

var express = require("express");
var mongoose = require('mongoose');
var redis = require('redis');

var argv = require('optimist')
	.usage('Usage: server.js -p [port] -f [static_files_path] -m [mongodb_url] -s [redis_url]')
    .demand(['p', 'f', 'm', 's'])
    .argv;

var app = express.createServer();
var staticPath = path.join(process.cwd(), argv.f);
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

require('./models/models.js').init(mongoose, argv.m);
var websockets = require("./websockets/websockets.js").init(app, redis, argv.s);
require("./rest/rest.js").init(app, express, websockets);

process.on('SIGINT', function () {
    console.log('Got SIGINT, shutting down server.');
    process.exit()
});

app.listen(argv.p);

console.log("Server ready, listening in port: " + argv.p);
console.log("Serving static files from: " + staticPath);
