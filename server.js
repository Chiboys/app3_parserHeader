"use strict";
var express = require("express");
var route = require("./app/routes/route.js");
var app = express();
route(app);
app.listen(process.env.PORT || 3000,function(){
	console.log("listen to 3000");
});