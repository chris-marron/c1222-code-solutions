const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const publica = path.join(__dirname, 'public');
console.log('path:', publica);
const statica = express.static(publica);
console.log('express static', statica);
app.use(statica);

app.listen(port, () => {
  console.log(`listnening on port ${port}`);
});
