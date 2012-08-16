steal('can/util/fixture')
.then(function() {
    var API_ROOT = "/api";
    var FIXTURE_POSTS =
	[
	    {
		"_id" : 1,
		"title" : "First post.",
		"body" : "First post body\n" +
		    "is here.",
		"date" : new Date(1329384474800)
	    },
	    {
		"_id" : 2,
		"title" : "Second post.",
		"body" : "Second post body\n" +
		    "is here.",
		"date" : new Date(1329384495592)
	    }
	];
    var FIXTURE_POSTS_NEXT_ID = 3;
    can.fixture("GET " + API_ROOT + "/posts",
		(function (orig, respondWith) {
		    steal.dev.log("Fixture for GET " + API_ROOT + "/posts");
		    respondWith(FIXTURE_POSTS);
		}));
    can.fixture("PUT " + API_ROOT + "/posts",
		(function (orig, respondWith) {
		    steal.dev.log("Fixture for PUT " + API_ROOT + "/posts");
		    respondWith({"_id" : FIXTURE_POSTS_NEXT_ID++});
		}));
    can.fixture("DELETE " + API_ROOT + "/posts/{_id}",
		(function (orig, respondWith) {
		    steal.dev.log("Fixture for DELETE " + API_ROOT + "/posts");
		    respondWith({});
		}));

});