const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.get('/test', (req, res) => {
  res.send({ message: 'test',});
});

app.post('/sum', (req, res) => {
  res.send({ result: req.body.a + req.body.b });
});

app.post('/product', (req, res) => {
  res.send({
    result: req.body.a * req.body.b,
  });
});

app.post('/sumArray', (req, res) => {
  let numAux = 0;
  for(let i = 0 ; i < req.body.array.lenth; i++){
    numAux = numAux + req.body.array[i];
  }
  req.body.result = numAux;
  res.send({
    array: req.body.array, num: req.body.result
  });
});


module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
