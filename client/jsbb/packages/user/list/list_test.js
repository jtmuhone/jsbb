steal('funcunit',function(){

module("JSBB.User.List", { 
	setup: function(){
		S.open("//jsbb/user/list/list.html");
	}
});

test("delete users", function(){
	S('#create').click()
	
	// wait until grilled cheese has been added
	S('h3:contains(Grilled Cheese X)').exists();
	
	S.confirm(true);
	S('h3:last a').click();
	
	
	S('h3:contains(Grilled Cheese)').missing(function(){
		ok(true,"Grilled Cheese Removed")
	});
	
});


});