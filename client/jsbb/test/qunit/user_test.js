steal("funcunit/qunit", "jsbb/fixtures", "jsbb/models/user.js", function(){
	module("Model: JSBB.Models.User")
	
	test("findAll", function(){
		expect(4);
		stop();
		JSBB.Models.User.findAll({}, function(users){
			ok(users)
	        ok(users.length)
	        ok(users[0].name)
	        ok(users[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new JSBB.Models.User({name: "dry cleaning", description: "take to street corner"}).save(function(user){
			ok(user);
	        ok(user.id);
	        equals(user.name,"dry cleaning")
	        user.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new JSBB.Models.User({name: "cook dinner", description: "chicken"}).
	            save(function(user){
	            	equals(user.description,"chicken");
	        		user.update({description: "steak"},function(user){
	        			equals(user.description,"steak");
	        			user.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new JSBB.Models.User({name: "mow grass", description: "use riding mower"}).
	            destroy(function(user){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})