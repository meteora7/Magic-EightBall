let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion = 'Will I win the Power Ball tonight?' // the qeustion user wants to ask the Magic Eight Ball
console.log(`The ${userName} asked: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8); //generates a random number between 0 and 7; Math.floor() is used to round up the number
let eightBall = '';
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply haze try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  default:
  eightball = 'None';
  break;
}
console.log(`The eightball answered: ${eightBall}`);

