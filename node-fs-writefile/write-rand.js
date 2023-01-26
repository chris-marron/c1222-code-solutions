const fs = require('fs');
const rndNum = Math.random();

fs.writeFile('random.txt', `${rndNum}\n`, err => {
  if (err) throw err;
});
