
var http = require('http');

var options = {
   host: '127.0.0.1',
   port: '8000'
};
var t1 = new Date().getTime();
var callback = function(response){
   var body = '';
   response.on('data', function(data) {
      body += data;
   });

   response.on('end', function() {
      console.log(body);
   });
}

var req = http.request(options, callback);
req.on('error', function (err) {
//error handling here
});
t2 = Date.now()
interval = (t2 - t1);
console.log("interval: ", interval);
req.end();
