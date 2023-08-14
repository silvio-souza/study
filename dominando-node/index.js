const express = require("express");
const server = express();

const port = 3000;

server.get("/", (req, res) => {
  return res.send("route: /hello");
});

// query params example: localhost/hello?name=Jonh&age=33
server.get("/hello", (req, res) => {
  const { name, age } = req.query; // with destructuring
  const city = req.query.city; // without destructuting

  //returning json
  return res.json({
    title: "Hello World",
    messageName: `Your name: ${name}`,
    messageAge: `Age: ${age}`,
    messageCity: `City: ${city}`,
  });
});

// route params example: localhost/hello/name
server.get("/hello/:name", (req, res) => {
  const { name } = req.params;

  //returning html
  return res.send(`<h1>This is ${name} route`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
