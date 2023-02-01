const takeAChance = require('./take-a-chance');

const name = takeAChance('chris');

name.then(
  value => {
    console.log(value);
  }
  ,
  reason => {
    console.error(reason.message);
  });
