steal(
	'./jsbb.css',
	'./models/models.js',
	'./resources/resources.js',
	'jsbb/main/init',
	'jsbb/post/create',
	'jsbb/post/list',
	'jsbb/user/create',
	'jsbb/user/list')
.then(function() {
	if (steal.options.env == 'fixtures') {
		steal("./fixtures/fixtures.js");
	}
})
.then(function(){
	$('body').jsbb_main_init();
})