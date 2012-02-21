
function init(app) {

    var sio = require("socket.io");
    var io = sio.listen(app);
    io.set('resource', '/api/socket')

    io.of('/chat').on('connection', function (socket) {
      socket.on('chat message', function (msg) {
        socket.emit('chat message', msg);
        socket.broadcast.emit('chat message', msg);
      });
    });
}

module.exports.init = init;
