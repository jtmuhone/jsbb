steal("jquery/dom/fixture", function() {
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
	$.fixture("GET /posts", function (orig, settings, headers) {
		return [200, "success", FIXTURE_POSTS, {}];
	});
	$.fixture("PUT /posts", function (orig, settings, headers) {
		return [200, "success", {"_id" : FIXTURE_POSTS_NEXT_ID++}, {}];
	});
});