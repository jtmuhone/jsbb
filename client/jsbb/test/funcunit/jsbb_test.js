steal("funcunit", function(){
	module("Main test", { 
		setup: function(){
			S.open("//jsbb/fixtures.html");
		}
	});
	
	test("Main page", function(){
		equals(S("h1").text(), "JSBB, the Javascript Bulletin Board");
	});
})