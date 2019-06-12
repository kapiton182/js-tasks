'use strict';

function play() {
  const secretNumber = generateRandomNumber(4);
  let message = '';

  while (true) {
    let currentNumber = prompt(message);

    if (currentNumber === null) {
      break;
    }

    if (currentNumber.length !== 4 || !consistsOfUniqueDigits(currentNumber)) {
      console.log("Введите корректное число");
      continue;
    }
    
    let cows = calculateCows(currentNumber, secretNumber);
    let bulls = calculateBulls(currentNumber, secretNumber);

    if (bulls === 4) {
      alert(`You win, secret number was ${secretNumber}`);
      break;
    }

    message += `${currentNumber} contains ${bulls} bulls, ${cows} cows\n`;
  }
}

function getTenInPow(n) {
    return Math.pow(10, n);
}

function calculateCows(currentNumber, secretNumber) {
  let countCows = 0;

  for (let i = 0; i < currentNumber.length; i++) {
    const elementCurrentNumber = currentNumber[i];

    for (let j = 0; j < currentNumber.length; j++) {
      const elementSecretNumber = secretNumber[j];

      if(elementCurrentNumber === elementSecretNumber && i !== j) {
        countCows++;
        break;
      }
    }
  }

  return countCows;
}

function calculateBulls(currentNumber, secretNumber) {
    let countBulls = 0;

    for (let i = 0; i < currentNumber.length; i++) {
      const elementCurrentNumber = currentNumber[i];
      const elementSecretNumber = secretNumber[i];

      if (elementCurrentNumber === elementSecretNumber) {
        countBulls++;
      }
    }
  
    return countBulls;
}

function generateRandomNumber(lenght) {
    const maxNumber = getTenInPow(lenght);
    const minNumber = getTenInPow(lenght-1);
    let secret;

    do {
        const rand = minNumber + Math.random() * (maxNumber + 1 - minNumber);
        secret = Math.floor(rand) + '';
    } while (!consistsOfUniqueDigits(secret));

    return secret;
}

function consistsOfUniqueDigits(number) {
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        
        if (number.includes(element, i+1)) {
            return false;
        }
    }

    return true;
}

play();