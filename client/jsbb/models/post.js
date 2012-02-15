steal('jquery/model', function(){

/**
 * @class JSBB.Models.Post
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend post services.  
 */
$.Model('JSBB.Models.Post',
/* @Static */
{
	findAll: API_ROOT + "/posts",
  	findOne : API_ROOT + "/posts/{_id}", 
  	create : API_ROOT + "/posts",
 	update : API_ROOT + "/posts/{_id}",
  	destroy : API_ROOT + "/posts/{_id}"
},
/* @Prototype */
{});

})