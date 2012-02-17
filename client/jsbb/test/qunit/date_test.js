module("Resources: date");

test("Date format", function() {
	var time = 1320913392907;
	equal(new Date(time).format("HH:MM:ss"), "10:23:12");
	equal(new Date(time).format("yyyy-mm-dd"), "2011-11-10");
	equal(new Date(time).format("HH:MM:ss'T'yyyy-mm-dd"), "10:23:12T2011-11-10");
});

test("Date parse ISO 8601 date", function() {
	var date1 = new Date(2011, 11 - 1, 10);
	equal(Date.parseISO8601("2011-11-10").toISOString(), date1.toISOString());
	var date2 = new Date(2000, 1 - 1, 1);
	equal(Date.parseISO8601("2000-01-01").toISOString(), date2.toISOString());
	equal("" + Date.parseISO8601("2011-11-10-"), "Invalid Date");
	equal("" + Date.parseISO8601("2011.11.10"), "Invalid Date");
	equal("" + Date.parseISO8601("28.11.2011"), "Invalid Date");
});

test("Date parse ISO 8601 datetime", function() {
    var date1 = new Date(2011, 11 - 1, 10, 11, 26, 30);
	equal(Date.parseISO8601("2011-11-10T11:26:30").toISOString(), date1.toISOString());

	var date2 = new Date(2000, 1 - 1, 1, 0, 0, 0);
	equal(Date.parseISO8601("2000-01-01T00:00:00").toISOString(), date2.toISOString());

	var date22 = new Date(2000, 1 - 1, 1, 0, (0 - new Date().getTimezoneOffset()), 0);
	equal(Date.parseISO8601("2000-01-01T00:00:00Z").toISOString(), date22.toISOString());

	var date3 = new Date(2011, 11 - 1, 10, 11, 11, 11, 111);
	equal(Date.parseISO8601("2011-11-10T11:11:11.111").toISOString(), date3.toISOString());

	var date32 = new Date(2011, 11 - 1, 10, 11, (26 - new Date().getTimezoneOffset()), 30, 111);
    equal(Date.parseISO8601("2011-11-10T11:26:30.111Z").toISOString(), date32.toISOString());
	
	equal("" + Date.parseISO8601("2011.11.10T11:11:11"), "Invalid Date");
	equal("" + Date.parseISO8601("28.11.2011T11:11:11"), "Invalid Date");
});
test("Date to UTC", function() {
	// Daylight saving time
	var date1 = new Date(2011, 11 - 1, 10, 11, 26, 30);
	var date1UTC = new Date(2011, 11 - 1, 10, 9, 26, 30);
	equal(date1.toUTC().toISOString(), date1UTC.toISOString());

	// No daylight saving time
	var date2 = new Date(2011, 6 - 1, 10, 11, 26, 30);
	var date2UTC = new Date(2011, 6 - 1, 10, 8, 26, 30);
	equal(date2.toUTC().toISOString(), date2UTC.toISOString());
});
