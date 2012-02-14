steal("funcunit", function(){
	module("jsbb test", { 
		setup: function(){
			S.open("//jsbb/jsbb.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})