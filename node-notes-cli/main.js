const fs = require('fs');
const data = require('./data.json');
const dataNotes = data.notes;
const arg2 = process.argv[2];
const create = process.argv[3];
const update = process.argv[4];

if (arg2 === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (arg2 === 'create') {
  dataNotes[data.nextId] = create;
  data.nextId++;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) throw err;
  });
} else if (arg2 === 'delete') {
  delete data.notes[create];
  const json = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', json, err => {
    if (err) throw err;
  });
} else if (arg2 === 'update') {
  data.notes[create] = update;
  const json = JSON.stringify(data, null, 2);

  fs.writeFile('data.json', json, err => {
    if (err) throw err;
  });
}
