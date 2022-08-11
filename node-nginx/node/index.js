const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const config = {
  host: "mysql",
  database: "desafiodb",
  user: "root",
  password: "root",
};

const connection = mysql.createConnection(config);

connection.query(`INSERT INTO person(name) values('Patrick')`);

let person;

connection.query("SELECT * FROM person", function (err, result) {
  if (err) throw err;

  person = result;
});

connection.end();

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle, Rocks!</h1>" + person[0].name);
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
