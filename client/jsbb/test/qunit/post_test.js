steal("funcunit/qunit", "jsbb/fixtures", "jsbb/models/post.js", function(){
	module("Model: JSBB.Models.Post")
	
	test("findAll", function(){
		expect(4);
		stop();
		JSBB.Models.Post.findAll({}, function(posts){
			ok(posts)
	        ok(posts.length)
	        ok(posts[0].name)
	        ok(posts[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new JSBB.Models.Post({name: "dry cleaning", description: "take to street corner"}).save(function(post){
			ok(post);
	        ok(post.id);
	        equals(post.name,"dry cleaning")
	        post.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new JSBB.Models.Post({name: "cook dinner", description: "chicken"}).
	            save(function(post){
	            	equals(post.description,"chicken");
	        		post.update({description: "steak"},function(post){
	        			equals(post.description,"steak");
	        			post.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new JSBB.Models.Post({name: "mow grass", description: "use riding mower"}).
	            destroy(function(post){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})