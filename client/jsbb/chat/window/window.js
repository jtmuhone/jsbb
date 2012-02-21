steal( 'jquery/controller',
	   'external/socket-io')
.then(function($){

/**
 * @class JSBB.Chat.Window
 * @parent index
 * @inherits jQuery.Controller
 * Lists chat items.
 */
$.Controller('JSBB.Chat.Window',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(element, socket) {
		console.log(socket);
	    socket.on('connect', function () {
    	    this.element.addClass('connected');
    	    console.log("window add class");
	    });
	}
});

});