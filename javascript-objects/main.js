var student = {
  firstName: 'Chris',
  lastName: 'Marron',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Audi valet';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'toyota',
  model: 'tacoma',
  year: 2002
};

vehicle['color'] = 'grey';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]', vehicle['color']);
console.log('value of vehicle["isConvertible"]', vehicle['isConvertible']);

console.log('value of vehicle', vehicle);

var pet = {
  name: 'german sheperd',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
