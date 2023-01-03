/* exported calculator */

var calculator = {
  add: function (x, y) {
    var sum = 0;
    sum = x + y;
    return sum;
  },
  subtract: function (x, y) {
    var sub = 0;
    sub = x - y;
    return sub;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];

    }
    return sum;
  },
  getAverage: function (numbers) {
    var average = 0;
    for (var i = 0; i < numbers.length; i++) {
      average += numbers[i];
    }
    return average / numbers.length;
  }

};
