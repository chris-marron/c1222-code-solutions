var arr = [
  {
    isbn: '9780593201732',
    title: 'Dune Messiah',
    author: 'Frank Herbert'

  }, {
    isbn: '9780385534246',
    title: 'Killers of the Flower Moon',
    author: 'David Grann'

  }, {
    isbn: '1624663567',
    title: 'The Poetic Edda',
    author: 'Jackson Crawford'
  }
];
console.log('array of objects:', arr);
console.log('typeof arr: ', typeof arr);

console.log('JSON.stringify: ', JSON.stringify(arr));
console.log('typeof JSON.stringify: ', typeof JSON.stringify(arr));

var stringId = JSON.stringify(3123123123);
console.log('numberId: ', stringId);
console.log('typeof numberId: ', typeof stringId);
console.log('numberId w JSON.parse:', JSON.parse(stringId));
console.log('typeof JSON.parse: ', typeof JSON.parse(stringId));
