steal('can/control',
      'can/construct/proxy',
      'can/view/ejs')
.then('jsbb/packages/post/model.js',
      'jsbb/packages/post/list/view.ejs')
.then(function() {
    PostListController = can.Control({
	defaults : {
	    socket: null,
	    posts: []
	}
    }, {
	init : function(element, opts) {
	    steal.dev.log("PostListController.init()");
	    PostModel.findAll({}, this.proxy('render'));
	    this.options.socket.on('new post', this.proxy('newPost'));
	    this.options.socket.on('delete post', this.proxy('deletePost'));
	},

	render: function(posts) {
	    steal.dev.log("PostListController.render(" + posts.length + ")");
	    this.options.posts = posts;
	    this.element.html(can.view('jsbb/packages/post/list/view.ejs',
				      posts));
	},

	'.destroy click': function(el){
	    steal.dev.log(".destroy click()");
	    if (confirm("Are you sure you want to destroy?")) {
	        el.closest('.post').data('post').destroy();
	    }
	},

	newPost: function(postData) {
	    steal.dev.log("PostListController.newPost(\"" + postData._id + "\")");
	    var index = this.indexOfPost(postData);
	    if (index < 0) {
		var post = new PostModel(postData);
		this.options.posts.push(post);
		steal.dev.log("newPost(): created.");
	    }
	},

	deletePost: function(postData) {
	    steal.dev.log("PostListController.deletePost(\"" + postData._id + "\")");
	    var index = this.indexOfPost(postData);
	    if (index >= 0) {
		this.options.posts.splice(index, 1);
		steal.dev.log("deletePost(): deleted.");
	    }
	},

	"{PostModel} destroyed" : function(Post, ev, post) {
	    steal.dev.log("{PostModel} destroyed(\"" + post._id + "\")");
	    var index = this.indexOfPost(post);
	    if (index >= 0) {
		this.options.posts.splice(index, 1);
		steal.dev.log("{PostModel} destroyed: deleted.");
	    }
	},

	"{PostModel} created" : function(Post, ev, post){
	    steal.dev.log("{PostModel} created(\"" + post._id + "\")");
	    var index = this.indexOfPost(post);
	    if (index < 0) {
		this.options.posts.push(post);
		steal.dev.log("{PostModel} created: created.");
	    }
	},

	"{PostModel} updated" : function(Post, ev, post){
	    steal.dev.log("{PostModel} updated(\"" + post._id + "\")");
	},

	indexOfPost: function(post) {
	    for (var i = 0; i < this.options.posts.length; i++) {
		if (this.options.posts[i]._id === post._id) {
		    return i;
		}
	    }
	    return -1;
	}

    });

});