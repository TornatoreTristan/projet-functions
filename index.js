import { prompt } from "./prompt.js";

// Créer la variable targetNumber et y assigner un nombre entre 0 et 100
// Demander à l'utilisateur de deviner le nombre. La fonction dit si trop petit, trop grand ou la bonne réponse
// On relance la fonction si ce n'est pas la bonne réponse.

console.log(`
  Welcome to the Number Guessing Game 🎮 

  Rules : 
  1. The system will generate a random number between 0 and 100. 
  2. Your task is to guess this number. 
  3. Enter a number when prompted. 
  4. If your guess is too hight or too low, you'll be notified, and you can guess again. 
  5. The game continue until you guess the correct number. 

  Let's get started 🚀!
`);

const game = () => {
  const targetNumber = Math.floor(Math.random() * 100);
  console.log(targetNumber);
  let tentatives = 0;

  const incrementTentatives = () => {
    return (tentatives += 1);
  };

  const isValidNumber = (number) => {
    return !Number.isNaN(number) && number >= 0 && number <= 100;
  };

  const testUserNumber = (target) => {
    const userNumber = prompt("Enter a number: ");
    if (!isValidNumber(userNumber)) {
      console.log(
        "Votre chiffre n'est pas entre 0 et 100 ou ce n'est pas un chiffre."
      );
      return testUserNumber(target);
    }
    if (userNumber < target) {
      incrementTentatives();
      console.log("📉 The entered number is **too low**");
      return testUserNumber(target);
    }
    if (userNumber > target) {
      incrementTentatives();
      console.log("📈 The entered number is **too high**");
      return testUserNumber(target);
    }
    incrementTentatives();
    return console.log(
      `🥳 tu as bien deviné notre nombre qui était ${target} en ${tentatives} tentatives`
    );
  };

  testUserNumber(targetNumber);
  restartGame();
};

const restartGame = () => {
  const choice = prompt("Do you want to play again? (Y/N): ");

  if (choice.toUpperCase() === "Y") {
    game();
  } else if (choice.toUpperCase() === "N") {
    console.log("Thank you for playing! Goodbye.");
  } else {
    console.log("Invalid choice. Please enter Y or N.");
    restartGame();
  }
};

game();
