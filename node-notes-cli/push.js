const fs = require('fs');
const data = require('./data.json');
const pro = process.argv[2];
const dataNotes = data.notes;
const create = process.argv[3];
const pro4 = process.argv[4];

if (pro === 'read') {
  for (const [key, value] of Object.entries(dataNotes)) {
    console.log(`${key}: ${value}`);
  }
} else if (pro === 'create') {
  data.nextId++;
  dataNotes[data.nextId.toString()] = create;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, 'utf8', err => {
    if (err) throw err;
  });
