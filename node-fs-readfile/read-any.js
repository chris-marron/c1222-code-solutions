// console.log(process.argv);
// if (process.argv[3]) {

// }
const mando = require('fs');
mando.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
