var express = require("express");
var app=express();

app.get('/',function(req,res){
//res.sendFile(__dirname+'/index.html');
console.log("hellow world");
});

app.listen(3000,function(){
	console.log("running");
});