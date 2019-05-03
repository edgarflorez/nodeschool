var http = require('http')  
       , async = require('async');  
      //  console.log(process.argv[2]);
      // /Users/edgarflorez/.nvm/versions/node/v6.2.0/lib/node_modules/async-you/exercises/waterfall/url.txt
       

     async.waterfall([  
       function(cb){  
         var body = '';  
         // response is JSON encoded object like the following {port: 3132}  
         http.get('http://localhost:9345', function(res){  
           res.on('data', function(chunk){  
             body += chunk.toString();  
           });  
           res.on('end', function(){  
            console.log("body");
             cb(null, body);  
           });  
         }).on('error', function(err) {  
           cb(err);  
         });  
       },  
       
       function(body, cb){  
         var body = '';  
         http.get(cb, function(res){  
           res.on('data', function(chunk){  
             body += chunk.toString();  
           });  
           res.on('end', function(){  
             cb(null, body);  
           });  
         }).on('error', function(err) {  
           cb(err);  
         });  
       }  
     ], function(err, result){  
       if (err) return console.error(err);  
       console.log(result);  
     });  