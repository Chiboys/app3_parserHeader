"use strict"
module.exports  = function(app){
	app.route("/")
		.get(
		require(process.cwd()+"/app/controllers/parser.js")	
	);
}