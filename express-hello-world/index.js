const express = require('express');
const app = express();

app.use(function (req, res) {
  // console.log(req.method);
  res.send('Hello World');
});

app.listen(3000, function () {
  // eslint-disable-next-line no-console
  console.log('Im listening');
});
