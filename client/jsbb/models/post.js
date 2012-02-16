steal('jquery/model', 'jquery/model/validations', function(){

/**
 * @class JSBB.Models.Post
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend post services.  
 */
$.Model('JSBB.Models.Post',
/* @Static */
{
	init : function() {
		this.validatePresenceOf("title", {message: "Missing"});
		this.validatePresenceOf("body", {message: "Missing"});
	},

	defaults : {
	    date : new Date()
	},
	
  	attributes : {
  		date : 'date'
  	},

  	convert : {
  		date : function(raw){
  			if (typeof raw == 'number') {
  				return new Date(raw);
  			} else if (typeof raw == 'string') {
  				return Date.parseISO8601(raw);
  			} else if (raw instanceof Date){
  				return raw;
  			} else {
  				new Date(Number.NaN);	  
  			}
  		}
  	},
  	id: "_id",
	findAll: "GET " + API_ROOT + "/posts",
  	findOne : "GET " + API_ROOT + "/posts/{_id}", 
  	create : "PUT " + API_ROOT + "/posts",
 	update : "PUT " + API_ROOT + "/posts/{_id}",
  	destroy : "DELETE " + API_ROOT + "/posts/{_id}"

},
/* @Prototype */
{});

})