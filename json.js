const http = require("http");
const fs = require("fs");
// const { pathToFileURL } = require('url');
// creating the server
let html = fs.readFileSync("./template/index.html", "utf-8");
let products = JSON.parse(fs.readFileSync("./data/products", "utf-8"));
const server = http.createServer((req, res) => {
  let path = req.url.toLowerCase();
  console.log("recieved the request");

  console.log(path);
  if (path === "/" || path === "/home") {
    //setting status code and header respose ex..text/html
    res.writeHead(200, {
      "content-type": "text/html",
      "my-header": "hello,world",
    });
    res.end(html.replace("{{%content%}}", "you are in homepage"));
  } else if (path === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(html.replace("{{%content%}}", "you are in about page"));
  } else if (path === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(html.replace("{{%content%}}", "you are in contact page"));
  } else if (path === "/products") {
    res.writeHead(200, { "content-type": "application/JSON" });
    res.end("you are on product page");
    console.log(products);
  } else {
    res.writeHead(404); // Set status code for not found
    res.end("404 Not Found"); // Respond with a 404 message
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server has started");
});
