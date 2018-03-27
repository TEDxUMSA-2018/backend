var express = require("express");
var app = express();

app.get("/", function(req, res) {
 res.json({success: true})
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
console.log("Listening on " + port);
});
