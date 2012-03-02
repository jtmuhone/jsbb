
function init(app, redis, redisUrl) {
    var sio = require("socket.io");
    var RedisStore = sio.RedisStore;
    var io = sio.listen(app);
    var urlParts = redisUrl.split(':');
    var host = urlParts[0];
    var port = urlParts[1];
    
    io.set('resource', '/api/socket');
    io.set('log level', 1);
    io.set('store', new RedisStore({redis: redis,
        redisPub: redis.createClient(port, host),
        redisSub: redis.createClient(port, host),
        redisClient: redis.createClient(port, host)
    }));

    io.of('/chat').on('connection', function (socket) {
      socket.on('chat message', function (msg) {
        socket.emit('chat message', msg);
        socket.broadcast.emit('chat message', msg);
      });
    });

    var websockets = {};

    io.of('/post').on('connection', function (socket) {
    });


    websockets.newPost = function (post) {
        io.of('/post').emit('new post', post);
    }

    websockets.deletePost = function (post) {
        io.of('/post').emit('delete post', post);
    }

    return websockets;
}

module.exports.init = init;
