var FIXTURE_POSTS =
    [
        {
        	"id" : 1,
        	"title" : "First post.",
        	"body" : "First post body\n" +
        			"is here."
        },
        {
        	"id" : 2,
        	"title" : "Second post.",
        	"body" : "Second post body\n" +
        			"is here."
        }
    ];
$.fixture("GET /posts", function (orig, settings, headers) {
	return [200, "success", FIXTURE_POSTS, {}];
});
