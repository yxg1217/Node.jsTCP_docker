
var http = require('http');
var t1 = new Date().getTime();
console.log("timestamp: ",t1);
var t2 = t1;
var interval = 0;
var server = http.createServer(function(req,res){
	res.write("hello world");
	console.log("hello docker");
	t2 = Date.now()
	interval = (t2 - t1);
	res.end();
});
server.listen(8000);

t2 = Date.now();
interval = (t2 - t1);
console.log("interval: ", interval);
