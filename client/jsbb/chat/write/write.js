steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'external/socket-io')
	.then('./views/init.ejs', function($) {

/**
 * @class JSBB.Chat.Write
 * @parent index
 * @inherits jQuery.Controller
 * Creates posts
 */
$.Controller('JSBB.Chat.Write',
/** @Prototype */
{
	init : function(element, socket) {
		this.socket = socket;
		this.element.html(this.view());
	},
	
	submit : function(el, ev){
		ev.preventDefault();
		var msg = $('#chat_message').val();
		$('#chat_message').val("");
        this.socket.emit('chat message', msg);
	}
})

});