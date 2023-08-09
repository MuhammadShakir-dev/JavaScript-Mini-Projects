// create a number gusessing game in JavaScript.
// => Take a range of guess number from the user.
// => Suggest random number according to the user defined limit.
// => According to the defined limit generate a random number.
// => If the user guess  = computer guess then print [you win].
// => At any point if user enter q quite the program.
// => Print the number of guesses that user enters.
// => If user wins displays the number of guesses and a congrats message.

let userInput = parseInt(prompt("Enter a maximum number : "));
while(!userInput){
    userInput  = parseInt(prompt("Enter a valid number : "));
};
let randomNo = Math.floor(Math.random() * userInput) + 1;
let guess = parseInt(prompt("Enter your first guess : "));
let attempts = 1;

while(parseInt(guess) !== randomNo){
    if(guess === "q"){
        break;
    };
    attempts++;
    if(guess > randomNo){
        guess  = prompt("Guess is high, enter a new guess :  ");
    } else if (guess < randomNo) {
        guess = prompt("Guess is low, enter a new guess :  ");
    };
};

if(guess === randomNo){
    console.log("Congratulations you win...!!!");
    console.log(`It took you ${attempts} attempts....!!!`);
};

if(guess === "q"){
    console.log("You quite thanks for playing.");
};
