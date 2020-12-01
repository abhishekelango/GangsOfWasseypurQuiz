var readlineSync = require("readline-sync");

var chalk = require("chalk");

var userName = chalk.white(readlineSync.question(chalk.blue("What is Your Name? ")));

console.log(chalk.cyan("Hello " + userName + " Welcome to Gangs of Wasseypur Quiz!🔫 "));

console.log("-------------------------------------------");

var score = 0;

function game(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    score = score + 1;
    console.log(chalk.green("You  are Right!"));
  }
  else {
    score = score;
    console.log(chalk.red("You are Wrong!"));
  }
  console.log(chalk.green("The Total score is: " + chalk.white(score)));
  console.log("------------------------")
console.log("\n")
}

var ques = [{
  question: `1- who does Shahid Khan impersonate to rob ferry trains?

  a- Sultana Daku
  b- A Labourer in Coal Mines
  c- There no one like that
  d- A british Officer 

 Choose an Option => `,

  answer: 'a'
},
{ question: `2-Right at the start of the film, a famous soap opera is playing on the TV. Which soap opera is it?

  a- Sasural Simar Ka
  b- Yeh Rishta kya Kehlata Hai
  c- Kasoti Zindagi Ki
  d- Kyuki Saans bhi Kabhi Bahu Thi

 Choose an Option => `,

answer: "d" },

{
  question:` 3-Name of all Sardarr Khan Children?

  a- Afzal Khan, Sultan Mirza, Perpendicular, Definite
  b- Danish Khan, Faisal Khan, Definite, Perpendicular
  c- Danish Khan, Faisal Khan, Sultan Khan, Perpendicular
  d- Faizal Khan, Sultan Khan, Faisal Khan, Danish Khan

 Choose an Option => ` ,
  answer: "b"
},
{ question:  `4-Perpendicular, also had a special skill. What was it? 
a - He played with a blade in his mouth 
b - He Used To Shoot Very Accurately
c - He Could Make Bombs
d - His dance was Apt

 Choose an Option =>`
,
 answer: "a" 
},
{ question:  `5-Which of the following fact about the film is true?
a - Gangs Of Wasseypur is Nawazuddin Siddique's Debut film.
b - Manoj Tiwari has sung a songfro this film
c - Ishan Khattar has a cameo in this film
d - It is Anurag Kashyap's first film released in theatres

 Choose an Option =>`
, answer: "c" 
},
{ question:  `6-At the end of the movie who rules Wasseypur?
a - Faizal
b - Perpendicular
c - Danish
d - Definite 

 Choose an Option =>`
, answer: "d" 
},
{ question:  `7-In which category did Wasseypur win a National Award?
a - Best Audiography
b - Best Director
c - Best Editing
d - Best Features

 Choose an Option =>`
, answer: "a" 
},
{ question:  `8-select all the celebrities who had a cameo in the film:
a - Vasan Bala
b - Yashpal Sharma
c - Vipin Sharma
d - All of the Above

 Choose an Option =>`
, answer: "d" 
},



]

for (var i = 0; i < ques.length; i++) {
  var questionSet = ques[i]
  game(questionSet.question, questionSet.answer);
}
console.log("-----------------------")

console.log(chalk.bgBlue("The HighScroes are: "))
var highScores = [{
  player: "Abhishek",
  score: "8"
},
{
  player:"Mayur",
  score: "7"
}]



for (var i = 0; i < highScores.length; i++){
  var scores = highScores[i];
  console.log(scores.player,scores.score);
}

console.log(chalk.blueBright("Kya Tumse Ho Paya?"))