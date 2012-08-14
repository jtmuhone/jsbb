steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'jsbb/models' )
.then( './views/init.ejs', 
       './views/user.ejs', 
       function($){

/**
 * @class JSBB.User.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists users and lets you destroy them.
 */
$.Controller('JSBB.User.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',JSBB.Models.User.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.user').model().destroy();
		}
	},
	"{JSBB.Models.User} destroyed" : function(User, ev, user) {
		user.elements(this.element).remove();
	},
	"{JSBB.Models.User} created" : function(User, ev, user){
		this.element.append(this.view('init', [user]))
	},
	"{JSBB.Models.User} updated" : function(User, ev, user){
		user.elements(this.element)
		      .html(this.view('user', user) );
	}
});

});