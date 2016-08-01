"use strict";
module.exports = function(req,res){
	var header = req.headers;
	//console.log();
	res.send(header);
}