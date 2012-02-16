module("Resources: string");

test("String trim", function() {
	equal(" bar  ".trim(), "bar");
	equal("   bar".trim(), "bar");
	equal("bar   ".trim(), "bar");
	equal("bar".trim(), "bar");
	equal("b a r".trim(), "b a r");
});

test("String startsWith", function() {
	equal("?foo=bar".startsWith("?"), true);
	equal("?foo=bar".startsWith("="), false);
	equal("?foo=bar".startsWith("?foo"), true);
	equal("FOO".startsWith("FOO"), true);
	equal("FOO".startsWith("FOOA"), false);
	equal("FOO".startsWith("foo"), false);
	equal("FOO".startsWith(""), true);
	equal("".startsWith(""), true);
});
