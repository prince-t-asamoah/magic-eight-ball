let userName = 'Prince';
userName ? console.log(`Hello ${userName}!`): console.log('Hello!');

let userQuestion;
userQuestion = 'Can I complete Amalitech Training in 2 months?';
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

if (randomNumber === 0) {
  eightBall = 'It is certain!';
} else if (randomNumber === 1) {
  eightBall = 'It is decidely so!';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again!';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now!';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it!';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no!';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good!';
} else if (randomNumber === 7) {
  eightBall = 'It is certain!';
}
console.log(eightBall);
