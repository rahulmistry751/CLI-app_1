var chalk=require("chalk");
var inp = require("readline-sync");

var score = 0;
var Name = inp.question("What's your name? ");

console.log("Welcome "+ Name+"!");

function play(question, answer) {
  var ans = inp.question(question);

  if (ans.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("Right!"));
    score+=1;
    
  } else {
    console.log(chalk.red("Wrong!"));
   
  }
  console.log("---------------------------")
}


var questions = [{
  question: "Where do I live now? ",
  answer: "Pune"
}, {
  question:"Where do I work? ",
  answer: "Ubisoft"
},
{
  question: "Who is my fav Superhero? ",
  answer: "Tony Stark"
}];

for (var i=0; i<questions.length; i++) {
  var que = questions[i];
  play(que.question, que.answer)
}

console.log("You Scored: ", score);
