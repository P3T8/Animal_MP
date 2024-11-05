const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");
const cors = require("cors");
app.use(cors()); //-- böngésző CORS védelem kikapcsolás
app.use(express.json());
animals = require("./animals.json");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Helló Express!");
});
app.get("/animal", (req, res) => {
  res.status(200).send(animals);
});
app.get("/animal/:id", (req, res) => {
  let id = req.params.id;
  res.status(200).send(animals[id - 1]);
})
app.post("/animal", (req, res) => {
  let newanimal = req.body;
  newanimal.id = animals.length + 1;
  animals.push(newanimal);
  res.status(201).send(JSON.stringify(newanimal));
});
app.put("/animal/:id", (req, res) => {
  let modifiedanimal = req.body;
  animals[id - 1] = modifiedanimal;
  res.status(200).send(JSON.stringify(modifiedanimal));
});
app.delete("/animal/:id", (req, res) => {
  let id = req.params.id;
  animals.splice(id - 1, 1);
  res.status(200).send();
});
app.get("animal", (req, res) => {
  res.header("Content-Type", "text/html; charset=utf-8");
  res.status(404).send("<h1>404 HIBA</h1>");
});
app.listen(PORT, () => {
  console.log(`Express szerver indítva. http://localhost:${PORT}`);
});