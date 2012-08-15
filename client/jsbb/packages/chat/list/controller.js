steal('can/control',
      'can/view/ejs')
.then('jsbb/packages/chat/list/view.ejs')
.then(function() {
    ChatListController = can.Control({
	defaults : {
	    socket: null
	}
    }, {
	init : function(element, options) {
	    steal.dev.log("ChatListController init()");
	    this.element.html(can.view('jsbb/packages/chat/list/view.ejs', {}));
	    this.options.socket.on('chat message', this.proxy('appendMessage'));
	},
	
	appendMessage: function (msg) {
	    steal.dev.log("appendMessage(\"" + msg + "\")");
	    $('#chat_lines').append($('<p>').append("&gt;&gt; " + msg));
	    $('#chat_lines').prop('scrollTop', $("#chat_lines").prop("scrollHeight"));
	}
    });
});