steal("funcunit/qunit",
      "jsbb/fixtures",
      "jsbb/packages/post/model.js")
.then(function(){
    module("Model: PostModel")
    
    test("findAll", function() {
	expect(4);
	stop();
	PostModel.findAll({}, function(posts) {
	    ok(posts)
	    ok(posts.length)
	    ok(posts[0].title)
	    ok(posts[0].body)
	    start();
	});
	
    })
    
    test("create", function(){
	expect(3)
	stop();
	new PostModel({title: "Testiposti", description: "Foobar"}).save(function(post) {
	    ok(post);
	    ok(post._id);
	    equals(post.title, "Testiposti")
	    post.destroy()
	    start();
	})
    })
    
    test("update" , function(){
	expect(2);
	stop();
	new PostModel({title: "Testiposti 1", body: "foo"}).
	    save(function(post){
	        equals(post.title, "Testiposti 1");
	        post.attr("title", "Testiposti 2");
		equals(post.title, "Testiposti 2");
	        post.destroy();
		start();
	    })
	
    });
    test("destroy", function(){
	expect(1);
	stop();
	new PostModel({title: "Testiposti 3", body: "foo"}).
	    destroy(function(post){
	        ok( true ,"Destroy called" )
		start();
	    })
    })
})