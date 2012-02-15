steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'jsbb/models' )
.then( './views/init.ejs', 
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
		this.element.html(this.view('init', {}) )
		$('#posts').jsbb_post_list();
		$('#create_post').jsbb_post_create();
	}
});

});