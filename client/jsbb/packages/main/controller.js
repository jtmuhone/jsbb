steal('can/control',
      'can/view/ejs',
      'lib/socket.io/dist/socket.io.js')
.then('jsbb/packages/main/view.ejs')
.then('jsbb/packages/post/list/controller.js')
.then('jsbb/packages/post/create/controller.js')
.then(function() {
    MainController = can.Control({
	defaults : {}
    }, {
	init : function(){
	    document.title  = "JSBB, the Javascript Bulletin Board";
	    this.element.html(can.view('jsbb/packages/main/view.ejs', {title: document.title}) )
	    var postSocket = io.connect('/post', {resource: 'api/socket'});
	    postSocket.on('connect', function () {
		steal.dev.log("post connected.");
	    });
	    new PostListController('#post_list', {socket: postSocket});
	    new PostCreateController('#create_post');
	    var chatSocket = io.connect('/chat', {resource: 'api/socket'});
	    chatSocket.on('connect', function () {
		steal.dev.log("chat connected.");
		$('#chat').addClass('connected');
	    });
	    //$('#chat_list').jsbb_chat_list(chatSocket);
	    //$('#chat_write').jsbb_chat_write(chatSocket);
	}
    });
});