steal(
	'./jsbb.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'jsbb/post/create',
	'jsbb/post/list',
	'jsbb/user/create',
	'jsbb/user/list',
	function(){					// configure your application
		
		$('#posts').jsbb_post_list();
		$('#create').jsbb_post_create();
		$('#users').jsbb_user_list();
		$('#create').jsbb_user_create();
})