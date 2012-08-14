steal('can/control',
      'can/construct/proxy',
      'can/view/ejs')
.then('jsbb/packages/post/model.js',
      'jsbb/packages/post/list/view.ejs',
      'jsbb/packages/post/list/viewOne.ejs')
.then(function() {
    PostListController = can.Control({
	defaults : {}
    }, {
	init : function(element, opts) {
	    PostModel.findAll({}, this.proxy('render'));
	    this.options.socket.on('new post', this.proxy('newPost'));
	    this.options.socket.on('delete post', this.proxy('deletePost'));
	},

	render: function(posts) {
	    this.element.html(can.view('jsbb/packages/post/list/view.ejs',
				      posts));
	},

	'.destroy click': function(el){
	    if (confirm("Are you sure you want to destroy?")) {
	        el.closest('.post').data('post').destroy();
	    }
	},

	newPost: function(postData) {
            var post = new PostModel(postData);
	    console.log(post);
            this.element.append(can.view('jsbb/packages/post/list/viewOne.ejs', {post: post}))
	},

	deletePost: function(postData) {
            var post = new PostModel(postData);
	    console.log(post);
            post.elements(this.element).remove();
	},

	"{PostModel} destroyed" : function(Post, ev, post) {
	    console.log(post);
	},

	"{PostModel} created" : function(Post, ev, post){
	    console.log(post);
	    this.element.append(can.view('jsbb/packages/post/list/viewOne.ejs', {post: post}))
	},

	"{PostModel} updated" : function(Post, ev, post){
	    post.elements(this.element).html(can.view('jsbb/packages/post/list/viewOne.ejs', post));
	}
    });

});