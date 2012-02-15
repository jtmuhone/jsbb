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
	findAll: "/posts",
  	findOne : "/posts/{id}", 
  	create : "/posts",
 	update : "/posts/{id}",
  	destroy : "/posts/{id}"
},
/* @Prototype */
{});

})