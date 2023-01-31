const add = require('./add');
const sub = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'add') {
  console.log('result: ', add(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'sub') {
  console.log('result: ', sub(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'multiply') {
  console.log('result: ', multiply(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'divide') {
  console.log('result:', divide(process.argv[2], process.argv[4]));
}
