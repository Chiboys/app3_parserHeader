"use strict";
module.exports = function(req,res){
	var header = req.headers;
	var language = header.accept-language.repalce(/(^[a-z]+-[a-z]+)/gi,"$1");
	var sys = header.user-agent.exec(/^\s\(.*\)/)[0];
	var json = {
		"ip"£ºheader.x-forwarded-for;
		"language":language;
		"operating System":sys;
	};
	//console.log();
	res.send(header);
}