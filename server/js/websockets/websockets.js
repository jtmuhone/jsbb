
function init(server, redis, redisPub, redisSub, redisClient) {
    var sio = require("socket.io");
    var RedisStore = sio.RedisStore;
    var io = sio.listen(server);
    
    io.set('resource', '/api/socket');
    io.set('log level', 1);
    io.set('store', new RedisStore({redis: redis,
        redisPub: redisPub,
        redisSub: redisSub,
        redisClient: redisClient
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
