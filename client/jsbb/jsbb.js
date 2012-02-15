steal(
	'./jsbb.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'jsbb/main/init',
	'jsbb/post/create',
	'jsbb/post/list',
	'jsbb/user/create',
	'jsbb/user/list',
	function(){					// configure your application
		$('body').jsbb_main_init();
})