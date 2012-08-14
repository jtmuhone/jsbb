steal('steal/less')
.then('lib/objects/objects.js')
.then('jsbb/styles/jsbb.less')
.then('jsbb/packages/main/controller.js')
.then(function() {
    if (steal.options.env == 'fixtures') {
        steal("jsbb/fixtures");
    }
})
.then(function() {
    new MainController("body");
});
/*
.then('jsbb/main/init',
	  'jsbb/post/create',
	  'jsbb/post/list',
	  'jsbb/chat/write',
	  'jsbb/chat/list',
	  'jsbb/user/create',
      'jsbb/user/list')
*/