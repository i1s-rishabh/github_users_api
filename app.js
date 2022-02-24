const { response } = require("express");
const express = require("express");
const app = express();
const request = require("request");

const port = 5000;

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

app.listen(port, () => {
  console.log("listen port 5000 ${port}");
});
