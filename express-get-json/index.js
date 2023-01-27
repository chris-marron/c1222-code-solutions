const express = require('express');
const app = express();
const arr = [];

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.use('/api/grades', (req, res) => {
  for (const gray in grades) {
    arr.push(grades[gray]);

  }
  res.json(arr);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listen:');
});

// const ok = grade => {
//   for (const gray in grade) {
//     arr.push(grade[gray]);

//   }
//   return arr;

// };
