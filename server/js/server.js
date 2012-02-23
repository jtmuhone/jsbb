#!/usr/bin/env node

var path = require("path");

var express = require("express");
var mongoose = require('mongoose');

var argv = require('optimist')
	.usage('Usage: server.js -p [port] -s [static_files_path] -m [mongodb_port]')
    .demand(['p', 's', 'm'])
    .argv;

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

require('./models/models.js').init(mongoose, argv.m);
var websockets = require("./websockets/websockets.js").init(app);
require("./rest/rest.js").init(app, express, websockets);

process.on('SIGINT', function () {
    console.log('Got SIGINT, shutting down server.');
    process.exit()
});

app.listen(argv.p);

console.log("Server ready, listening in port: " + argv.p);
console.log("Serving static files from: " + staticPath);
