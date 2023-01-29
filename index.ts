import inquirer from "inquirer";

console.log(`Game: Lets guess a number between 1 to 10 in 3 tries`);

let randNum = Math.floor(Math.random() * 10 + 1);
// console.log(`random num is: ${randNum}`);

let actualAnswer: number = randNum; //random number auto generated
let numTries: number = 3;
let play: Boolean = true;

interface AnswersType {
  meraGuess: number;
};

interface PlayAgainAnswerType {
  playAgain: boolean;
};

while (play) {
  while (numTries > 0) {
    const answer: AnswersType = await inquirer.prompt([
      { 
        name: "meraGuess",
        message: "Number dalo Bahi",
        type: "number",
      },
    ]);

    // console.log(answer);
    if (answer.meraGuess == actualAnswer) {
      console.log("Hurrah! You gussed it right. Game Over");
      numTries = 0;
    } else {
      console.log("You guessed it wrong");
      if (actualAnswer > answer.meraGuess) {
        console.log("Think Higher");
      } else {
        console.log("Think Lower");
      }
      console.log(`You have ${numTries - 1} left`);
    }
    numTries--; //numTries = numTries-1
  };

  const playAgainAnswer: PlayAgainAnswerType = await inquirer.prompt([
    {
      name: "playAgain",
      message: "Wanna play again",
      type: "confirm",
    },
  ]);
  console.log("Play Again", playAgainAnswer);
  if (playAgainAnswer.playAgain) {
    numTries = 3;
    randNum = Math.floor(Math.random() * 10 + 1);
    actualAnswer = randNum;
  } else {
    console.log("Exiting game.....");
    play = false;
  }
};
