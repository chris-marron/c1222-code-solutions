/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
}
