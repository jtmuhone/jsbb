steal('can/control',
      'can/view/ejs',
      'jquery/dom/form_params')
.then('jsbb/packages/chat/write/view.ejs')
.then(function() {
    ChatWriteController = can.Control({
	defaults : {
	    socket: null
	}
    }, {
	init : function(element, options) {
	    steal.dev.log("ChatWriteController init()");
	    this.element.html(can.view('jsbb/packages/chat/write/view.ejs', {}));
	},
	
	submit : function(el, ev){
	    ev.preventDefault();
	    var msg = $('#chat_message').val();
	    steal.dev.log("submit(\"" + msg + "\")");
	    $('#chat_message').val("");
            this.options.socket.emit('chat message', msg);
	}
    })
    
});