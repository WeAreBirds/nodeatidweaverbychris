var express = require("express");

var app = express();

app.get("/", function(req,res,next){
    res.send("Node at Idweaver by Chris");
});

module.exports = app;