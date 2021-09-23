const readlineSync = require('readline-sync');
const chalk = require('chalk');

let currentUser;
let score = 0;
let highScores = 
  {
    name:'Randeep',
    score: 4
  }
;
const questions = [
  {
    question:'What is my birth date?',
    answer:'2',
  },{
    question:'What is my last name?',
    answer:'sinha'
  },{
    question:'How old am I?',
    answer:'27'
  },{
    question:'My favorite anime?',
    answer:'dragon ball z'
  },{
    question:'My favorite book?',
    answer:'rich dad poor dad'
  }
]

const userName = readlineSync.question('Hey, user Welcome to the DO YOU KNOW ABHIJEET? quiz \n Please enter your name ');

const userAgreement = readlineSync.question(`Welcome ${userName}. Are you ready to play DO YOU KNOW ABHIJEET quiz? (y/n) `);

function instructions(){
  console.log(`\n Each question carries ${chalk.bold.blue(1)} point`);
}

if(userAgreement.toUpperCase() === 'Y'){
  instructions();
  
  function getUserAnswer(question){
    console.log(`\n ${question}`);
    const userAnswer = readlineSync.question('Enter your answer: ')
    return userAnswer;
  }

  function play(question,answer){
    const userAnswer = getUserAnswer(question);
    if((userAnswer.toUpperCase() === answer.toUpperCase())){
      score++;
      console.log(`Your answer is ${chalk.bold.green('correct')}`);
    }else{
      console.log(`Sorry!! Your answer is ${chalk.bold.red('incorrect')}`);
    }
      console.log(`Your current score is ${chalk.bold.magenta(score)}`);
      console.log(chalk.bold.blue("=".repeat(60)));
  }

  for(let i=0;i<questions.length;i++){
    const currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }

  console.log(`Your Final Score is ${score}.\n Thanks for taking the quiz`);

  currentUser = {
    name:userName,
    score:score
  }

  if(currentUser.score > highScores.score){
    highScores = currentUser;
    console.log(`${chalk.bold.green('Congratulations!! You just beat the highScore, please send your email id..Thanks for taking the quiz.')}`);
  }else{
    console.log(`${chalk.bold.red('Sorry!! You were not able to beat the highScore...Try again..')}`)
  }
}
else{
  console.log(`${chalk.yellow('Do come back whenever you feel like')}`);
}




