steal('jquery/model', function(){

/**
 * @class JSBB.Models.User
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend user services.  
 */
$.Model('JSBB.Models.User',
/* @Static */
{
	findAll: "/users.json",
  	findOne : "/users/{id}.json", 
  	create : "/users.json",
 	update : "/users/{id}.json",
  	destroy : "/users/{id}.json"
},
/* @Prototype */
{});

})