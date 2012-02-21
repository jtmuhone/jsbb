steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'external/socket-io')
.then( './views/init.ejs',
       function($){

/**
 * @class JSBB.Chat.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists chat items.
 */
$.Controller('JSBB.Chat.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(element, socket) {

	

this.element.html(this.view('init', {} ));
      socket.on('chat message', (function (msg) {
          $('#chat_lines').append($('<p>').append("&gt;&gt; " + msg));
      }));


	}
});

});