//js jsbb/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('jsbb/jsbb.html', {
		markdown : ['jsbb']
	});
});