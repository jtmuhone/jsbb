steal('jquery/controller',
	  'jquery/view/ejs',
	  'jquery/controller/view')
.then('./views/init.ejs', 
      function($) {

/**
 * @class JSBB.Post.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists posts and lets you destroy them.
 */
$.Controller('JSBB.Main.Init',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		document.title  = "JSBB, the Javascript Bulletin Board";
		this.element.html(this.view('init', {title: document.title}) )
		$('#post_list').jsbb_post_list();
		$('#create_post').jsbb_post_create();
		var chat_socket = io.connect('/chat', {resource: 'api/socket'});
		chat_socket.on('connect', function () {
            $('#chat').addClass('connected');
        });
        $('#chat_list').jsbb_chat_list(chat_socket);
		$('#chat_write').jsbb_chat_write(chat_socket);
	}
});

});