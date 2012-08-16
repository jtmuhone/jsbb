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
	
	"button#create_post_button click": function(el, ev){
	    steal.dev.log("submit click()");
	    ev.preventDefault();
	    this.element.find("button#create_post_button").html('Creating...');
	    var postData = this.element.find("#create_post_form").formParams();
	    var post = new PostModel(postData);
	    if (!post.errors()) {
		post.save(this.proxy('success'), this.proxy('error'));
	    } else {
		this.error(post.errors());
	    }
	},
	    
	success: function(){
	    this.element.find("button#create_post_button").html('Create');
	    this.element.find("form")[0].reset()
	},
	
	error: function() {
            this.element.find("button#create_post_button").html('Failed');
	}
    }) 
});