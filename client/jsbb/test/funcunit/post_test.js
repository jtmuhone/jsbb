steal("funcunit", function(){
	module("Post test", { 
		setup: function(){
			S.open("//jsbb/fixtures.html");
		}
	});
	
	test("Display posts", function(){
	    S("#post_list li.post").visible(function () {
	        equal(S("#post_list .post").size(), 2, "Posts count");
	        equal(S("#post_list .post:eq(0) .post_title").text().trim(), "First post.", "Post 0 title");
            equal(S("#post_list .post:eq(0) .post_date").text().trim(), "16.02.2012 11:27:54", "Post 0 date");
            equal(S("#post_list .post:eq(1) .post_title").text().trim(), "Second post.", "Post 1 title");
            equal(S("#post_list .post:eq(1) .post_date").text().trim(), "16.02.2012 11:28:15", "Post 1 date");
	    });
	});

    test("Write posts", function(){
        S("#post_list li.post").visible(function () {
            equal(S("#post_list li.post").size(), 2, "Posts count");
            S("#create_post_form").visible(function() {
                S("#create_post_form [name=title]").type("Third post.");
                S("#create_post_form [name=body]").type("Third post body\nis here.");    
                S("#create_post_form [type=submit]").click();
                S("#post_list li.post:eq(2)").visible(function () {
                    equal(S("#post_list li.post").size(), 3, "Posts count");
                    equal(S("#post_list .post:eq(2) .post_title").text().trim(), "Third post.", "New post title");
                });
            });
        });
    });

})