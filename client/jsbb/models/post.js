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
	findAll: "/posts.json",
  	findOne : "/posts/{id}.json", 
  	create : "/posts.json",
 	update : "/posts/{id}.json",
  	destroy : "/posts/{id}.json"
},
/* @Prototype */
{});

})