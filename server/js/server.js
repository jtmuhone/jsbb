#!/usr/bin/env node

var mongoose = require('mongoose');
var redis = require('redis');

var argv = require('optimist')
	.usage('Usage: server.js -p [port] -f [static_files_path] -m [mongodb_url] -s [redis_url]')
    .demand(['p', 'f', 'm', 's'])
    .argv;

process.on('SIGINT', function () {
    console.log('Got SIGINT, shutting down server.');
    process.exit()
});


mongoose.connect('mongodb://' + argv.m, function(err) {
    if (!err) {
        var redisUrlParts = argv.s.split(':');
        var redisHost = redisUrlParts[0];
        var redisPort = redisUrlParts[1];
        
        require('./app.js').start(argv.p, argv.f,
                mongoose, redis,
                redis.createClient(redisPort, redisHost),
                redis.createClient(redisPort, redisHost),
                redis.createClient(redisPort, redisHost));
    } else {
        console.log(err.message);
    }
});


