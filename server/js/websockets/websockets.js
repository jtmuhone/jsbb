
function init(app) {
    var sio = require("socket.io");
    var io = sio.listen(app);
    io.set('resource', '/api/socket');
    
    io.of('/chat').on('connection', function (socket) {
      socket.on('chat message', function (msg) {
        socket.emit('chat message', msg);
        socket.broadcast.emit('chat message', msg);
      });
    });

    var websockets = {};

    io.of('/post').on('connection', function (socket) {
        console.log("!!!post connected!!!");
    });


    websockets.newPost = function (post) {
        console.log("!!!new post!!!");
        io.of('/post').emit('new post', post);
    }

    websockets.deletePost = function (post) {
        console.log("!!!delete post!!!");
        io.of('/post').emit('delete post', post);
    }

    return websockets;
}

module.exports.init = init;
