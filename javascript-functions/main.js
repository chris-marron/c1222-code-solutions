function convertMinutesToSeconds(minutes) {
  var seconds = 60 * minutes;

  return seconds;
}

var total = convertMinutesToSeconds(5);
console.log('value of converMinutesToSeconds:', total);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greets = greet('Beavis');
console.log('function greet:', greets);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var area = getArea(17, 42);
console.log('The area is:', area);

function getFirstName(person) {
  var first = person.firstName;
  return first;
}

var fullName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First Name:', fullName);

function getLastElement(array) {
  var last = array[array.length - 1];
  return last;

}

var last = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last element of the array:', last);
