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

var stringyJSON = JSON.stringify(arr);
console.log('JSON.stringify: ', stringyJSON);
console.log('typeof JSON.stringify: ', typeof stringyJSON);

var studentInfo = '{"numberId" : 1502, "name" : "riddick"}';
console.log('studentInfo: ', studentInfo);
console.log('typeof studentInfo: ', typeof studentInfo);

var parseJSON = JSON.parse(studentInfo);
console.log('numberId w JSON.parse:', parseJSON);
console.log('typeof JSON.parse: ', typeof parseJSON);
