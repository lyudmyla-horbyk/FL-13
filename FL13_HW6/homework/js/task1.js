const DIGITS_AFTER_COMMA = 2;

let checkNumber = prompt('Check number: ');
const oneHundred = 100;
if (checkNumber === null) {
  alert('Invalid input data');
} else {
  let tipPercentage = prompt('Tip: ');
  if (tipPercentage[tipPercentage.length - 1] === '%') {
    tipPercentage = tipPercentage.substring(0, tipPercentage.length - 1);
  }
  checkNumber = parseInt(checkNumber);
  tipPercentage = parseInt(tipPercentage);
  let tip = checkNumber / oneHundred * tipPercentage;
  let totalSum = checkNumber + tip;
  if (isNaN(checkNumber) || isNaN(tipPercentage) || totalSum < 0 || tipPercentage < 0 || tipPercentage > oneHundred) {
    alert('Invalid input data');
  } else {
    alert('Tip amount: ' + tip.toFixed(DIGITS_AFTER_COMMA));
    alert('Total sum to pay: ' + totalSum.toFixed(DIGITS_AFTER_COMMA));
  }
}
