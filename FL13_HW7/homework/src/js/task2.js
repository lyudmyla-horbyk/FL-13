let maxGamePrize = 100;
let userPrize = 0;
let startNumber = 0;
let endNumber = 5;
let isWon;
let attemptPrize;
let wantsToQuit = false;
let numberTwo = 2;
let numberFive = 5;

const confirmWindow = confirm('Do you want to play a game?');
if (confirmWindow === false) {
  alert('You did not become a billionaire, but can');
} else {
  do {
    isWon = false
    attemptPrize = maxGamePrize;
    const secretNumber = Math.floor(Math.random() * endNumber);
    console.log(secretNumber)
    for (let i = 3; i > 0; i--) {
      const number = Number(prompt(`Choose a roulette pocket number from ${startNumber} to ${endNumber}` +
        '\nAttempts left: ' + i +
        '\nTotal prize: ' + userPrize + '$' +
        '\nPossible prize on current attempt: ' + attemptPrize + '$'));
      if (number === secretNumber) {
        isWon = true;
        userPrize += attemptPrize;
        maxGamePrize *= numberTwo;
        endNumber += numberFive;
        wantsToQuit = confirm(`Congratulation, you won! Your prize is: ${userPrize}$. Do you want to continue?`);
        break
      } else {
        attemptPrize /= numberTwo;
      }
    }
  } while (isWon && wantsToQuit);
  alert(`Thank you for your participation. Your prize is: ${userPrize}$`);
}
