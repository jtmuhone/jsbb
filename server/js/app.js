
function start(port, staticFiles, mongoose, redis, redisPub, redisSub, redisClient) {

    var express = require('express');
    var path = require('path');

    var app = express.createServer();
    var staticPath = path.join(process.cwd(), staticFiles);
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

    require('./models/models.js').init(mongoose);
    var websockets = require("./websockets/websockets.js").init(app, redis, redisPub, redisSub, redisClient);
    require("./rest/rest.js").init(app, express, websockets);

    app.listen(port);

    console.log("Server ready, listening in port: " + port);
    console.log("Serving static files from: " + staticPath);
}

module.exports.start = start;