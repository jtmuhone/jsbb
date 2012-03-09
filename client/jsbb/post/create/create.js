steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'jsbb/models' )
	.then('./views/init.ejs', function($) {

/**
 * @class JSBB.Post.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates posts
 */
$.Controller('JSBB.Post.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	
	submit : function(el, ev){
		ev.preventDefault();
		$("#create_post_button").html('Creating...');
		var post = new JSBB.Models.Post(el.formParams());
		if (!post.errors()) {
			post.save(this.callback('success'), this.callback('error'));
		} else {
			this.error(post.errors());
		}
	},
	
	success : function(){
		$("#create_post_button").html('Create');
		$("form")[0].reset()
	},
	
	error : function() {
        $("#create_post_button").html('Failed');
	}
})

});