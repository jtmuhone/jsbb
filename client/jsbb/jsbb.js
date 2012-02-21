steal('./resources/resources.js',
	  'steal/less')
.then('jsbb/main/init',
	  'jsbb/post/create',
	  'jsbb/post/list',
	  'jsbb/chat/write',
	  'jsbb/chat/list',
	  'jsbb/user/create',
      'jsbb/user/list')
.then('./jsbb.less',
    function() {
        if (steal.options.env == 'fixtures') {
            steal("./fixtures/fixtures.js");
        }
    },
	function() {
		$(function() {
			$('body').jsbb_main_init();
		});
	});
