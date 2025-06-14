// Code your solutions in this file
// writeCards function
function writeCards(names, eventName) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return messages;
}

// Example call (optional for testing)
writeCards(["Charlie", "Samip", "Ali"], "birthday");
// => [
//   "Thank you, Charlie, for the wonderful birthday gift!",
//   "Thank you, Samip, for the wonderful birthday gift!",
//   "Thank you, Ali, for the wonderful birthday gift!"
// ]

// countDown function
function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

// Example call (optional for testing)
countDown(10);
// => logs numbers from 10 to 0

