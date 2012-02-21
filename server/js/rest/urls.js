var path = require("path");

function resolve(req, items) {
	var returned = [];
	items.forEach(function (item) {
		returned.push(path.join(req.url, item));
	});
	return returned;
}

module.exports.resolve = resolve;
