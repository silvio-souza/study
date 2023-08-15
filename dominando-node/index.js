const express = require("express");
const server = express();

const port = 3000;

server.use(express.json());

let customers = [
  { id: 1, name: "Google", website: "http://google.com" },
  { id: 2, name: "Facebook", website: "http://facebook.com" },
  { id: 3, name: "YouTube", website: "http://youtube.com" },
];

server.get("/customers", (req, res) => {
  return res.json(customers);
});

server.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find((el) => el.id === id);
  const status = customer ? 200 : 404;

  return res.status(status).json(customer);
});

server.post("/customers", (req, res) => {
  const { name, website } = req.body;
  const id = customers[customers.length - 1].id + 1;

  const newCustomer = { id, name, website };
  customers.push(newCustomer);

  return res.status(201).json(newCustomer);
});

server.put("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, website } = req.body;

  const index = customers.findIndex((el) => el.id === id);
  const status = index >= 0 ? 200 : 400;

  if (index >= 0) {
    customers[index] = { id: parseInt(id), name, website };
  }

  return res.status(status).json(customers[index]);
});

server.delete("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = customers.findIndex((el) => el.id === id);
  const status = index >= 0 ? 200 : 404;

  const deletedItem = customers[index];

  if (index >= 0) {
    customers.splice(index, 1);
  }

  return res.status(status).json(deletedItem);
});

/*
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
*/

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
