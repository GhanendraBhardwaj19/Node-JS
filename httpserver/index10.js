const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("I am at home.");
  } else if (req.url == "/contact") {
    res.end("I am at contact.");
  } else if (req.url == "/about") {
    res.end("I am at about.");
  }
});

server.listen(2000, "127.0.0.1", () => {
  console.log("listening to the port no 2000");
});
