steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'jsbb/models' )
	.then('./views/init.ejs', function($){

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
		this.element.find('[type=submit]').val('Creating...')
		new JSBB.Models.Post(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});