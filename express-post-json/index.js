const express = require('express');
const app = express();

let nextId = 1;
const grades = {};
app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const nums in grades) {
    arr.push(grades[nums]);
  }
  res.json(arr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const reqBody = req.body;
  grades[nextId] = reqBody;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201).send(reqBody);

});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
