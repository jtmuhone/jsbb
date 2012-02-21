steal(function() {

    var dummy_io = {};

    dummy_io.callbacks = {};
    
    dummy_io.on = function(event, callback) {
        if (this.callbacks[event]) {
            this.callbacks[event].push(callback);
        } else {
            this.callbacks[event] = [];
            this.callbacks[event].push(callback);
        }
        if (event == 'connect') {
            callback();
        }
    };

    dummy_io.emit = function(event, data) {
        for (var i = 0; i < this.callbacks[event].length; i++) {
            this.callbacks[event][i](data);
        }
    };

    io = {};
    io.connect = function(namespace, options) {
        console.log("Using socket.io dummy for namespace: " + namespace);
        return dummy_io;
    };
    

});