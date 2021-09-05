const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9090");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST,OPTIONS");
  next();
});

app.use(router);

app.use(function(req, res) {
  res.status(404).send({ error: 'Route Not found' });
});

app.listen(8088, 'localhost', () => {
  console.log('server listen on 8088');
});

module.exports = app;