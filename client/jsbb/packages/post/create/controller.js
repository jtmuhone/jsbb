steal('can/control',
      'can/construct/proxy',
      'can/view/ejs',
      'jquery/dom/form_params')
.then('jsbb/packages/post/model.js',
      'jsbb/packages/post/create/view.ejs')
.then(function() {
    PostCreateController = can.Control({
	defaults : {}
    }, {
	init: function() {
	    this.element.html(can.view('jsbb/packages/post/create/view.ejs'));
	},
	
	submit: function(el, ev){
	    ev.preventDefault();
	    $("#create_post_button").html('Creating...');
	    var post = new PostModel(el.formParams());
	    if (!post.errors()) {
		post.save(this.proxy('success'), this.proxy('error'));
	    } else {
		this.error(post.errors());
	    }
	},
	    
	success: function(){
	    $("#create_post_button").html('Create');
	    $("form")[0].reset()
	},
	
	error: function() {
            $("#create_post_button").html('Failed');
	}
    }) 
});