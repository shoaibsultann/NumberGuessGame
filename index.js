import inquirer from "inquirer";
console.log(`Game: Lets guess a number between 1 to 10 in 3 tries`);
let randNum = Math.floor(Math.random() * 10 + 1);
// console.log(`random num is: ${randNum}`);
let actualAnswer = randNum; //random number auto generated
let numTries = 3;
while (numTries > 0) {
    const answer = await inquirer.prompt([
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
    }
    else {
        console.log("You guessed it wrong");
        if (actualAnswer > answer.meraGuess) {
            console.log("Think Higher");
        }
        else {
            console.log("Think Lower");
        }
        console.log(`You have ${numTries - 1} left`);
    }
    numTries--; //numTries = numTries-1
}
