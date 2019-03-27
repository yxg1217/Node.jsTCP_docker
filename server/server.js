
var http = require('http');
var server = http.createServer(function(req,res){
	res.write("hello world");
	var t1 = new Date().getTime();
	var t2 = t1;
	var interval = 0;
	console.log("timestamp: ",t1);
	console.log("hello docker");
	t2 = Date.now()
	interval = (t2 - t1);
	console.log("interval: ", interval);
	res.end();
});
server.listen(8000);

