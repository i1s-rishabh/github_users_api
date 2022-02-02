const { response } = require("express");
const express = require("express");
const app = express();
// const https = require('http');
const request = require("request");

const port = 5000;

// const githubUsers = `https://api.github.com/users`;

//create api

// --------------------------------------------------------------------- Method 1

// app.get('/github_users', (req, res) => {
//     http.get('https://api.github.com/users', (resp) => {
//         let data = '';

//         resp.on('data', (chunk) => {
//             data += chunk;
//         });

//         resp.on('end', () => {
//             res.json(JSON.parse(data));
//         });
//     }).on("error", (err) => {
//         res.json("Error: " + err.message);
//     });
// })

// the error is coming during the execution of this code is below
// undefined:2
// Request forbidden by administrative rules. Please make sure your request has a User-Agent head
// er (http://developer.github.com/v3/#user-agent-required). Check https://developer.github.com f
// or other possible causes.
// ^

// SyntaxError: Unexpected token R in JSON at position 2
//     at JSON.parse (<anonymous>)
//     at IncomingMessage.<anonymous> (C:\Users\hp\OneDrive\Desktop\github_user_api\app.js:25:27)
//     at IncomingMessage.emit (events.js:327:22)
//     at endReadableNT (_stream_readable.js:1223:12)
//     at processTicksAndRejections (internal/process/task_queues.js:84:21)

// ------------------------------------------------------------------------------------ Method 2

app.get("/github_users", (req, res) => {
  const username = req.query.username;
  console.log(req);
  var options = {
    url: `https://api.github.com/users/${username}`,
    method: "GET",
    headers: { "user-agent": "node.js" },
  };

  request(options, (error, response, body) => { 
    if (error) {
      res.send("An error occured");
    } else {
      res.json(JSON.parse(body));
    }
  });
});

// the error is coming during the execution of this code is below
// Request forbidden by administrative rules. Please make sure your request has a User-Agent header (http://developer.github.com/v3/#user-agent-required). Check https://developer.github.com for other possible causes.

// ------------------------------------------------------------------------------------ Method 3

// var options = {
//     host: 'api.githu.com',
//     path: '/users/' + username + '/repos',
//     method: 'GET',
//     headers: {'user-agent': 'node.js'}
// };

// var requesti = https.request(options, function(response){
//     var body = '';
//     response.on("data", function(chunk){
//         body += chuck.toString('utf8');
//     });

//     response.on('end', function(){
//         console.log('Body: ', body);
//     });
// });

app.listen(port, () => {
  console.log("listen port 5000 ${port}");
});
