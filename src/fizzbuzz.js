function Fizzbuzz() {
  this.check = function(number) {
    if(_hasZeroReminder(number, 15)) {
      return 'fizzbuzz';
    } else if(_hasZeroReminder(number, 3)) {
      return 'fizz';
    } else if(_hasZeroReminder(number, 5)) {
      return 'buzz';
    } else {
      return number;
    }
  };
}
var _hasZeroReminder = function(number, divisor) {
  return(number % divisor === 0);
};
