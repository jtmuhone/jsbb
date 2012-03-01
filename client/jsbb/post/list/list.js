steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'jsbb/models' )
.then( './views/init.ejs', 
       './views/post.ejs', 
       function($){

/**
 * @class JSBB.Post.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists posts and lets you destroy them.
 */
$.Controller('JSBB.Post.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(element, socket) {
		this.element.html(this.view('init',JSBB.Models.Post.findAll()));
		socket.on('new post', this.callback('newPost'));
		socket.on('delete post', this.callback('deletePost'));
	},

	'.destroy click': function(el){
	    if (confirm("Are you sure you want to destroy?")) {
	        el.closest('.post').model().destroy();
	    }
	},

	newPost: function(postData) {
        var post = new JSBB.Models.Post(postData);
        this.element.append(this.view('init', [post]))
	},

	deletePost: function(postData) {
        var post = new JSBB.Models.Post(postData);
        post.elements(this.element).remove();
	},

	"{JSBB.Models.Post} destroyed" : function(Post, ev, post) {
		post.elements(this.element).remove();
	},
	"{JSBB.Models.Post} created" : function(Post, ev, post){
	    this.element.append(this.view('init', [post]))
	},
	"{JSBB.Models.Post} updated" : function(Post, ev, post){
		post.elements(this.element)
		      .html(this.view('post', post) );
	}
});

});