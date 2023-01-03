/* exported student */
var student = {
  firstName: 'Chris',
  lastName: 'Marron',
  subject: 'JavaScript',
  getFullName: function (fullName) {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function (introduction) {
    return `Hello, my name is ${this.getFullName()} and I am studying ${this.subject}.`;
  }
};
