const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Formula padrao para um numero aleatorio dentro de um range
// Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)

const number = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let attempts = 2;

// console.log(number);
console.log(
  "Voce me informa um numero de 0 ate 10 e eu te digo se voce acertou. Voce vai ter 3 tentativas!!"
);

const question = function () {
  readline.question("Informe o numero: ", (guess) => {
    if (isNaN(guess)) {
      console.log("\nVoce deve informar um numero de 0 a 10");
      question();
    } else if (guess == number) {
      console.log("\nUau!! Parabens, voce acertou. O numero era " + number);
      readline.close();
    } else if (attempts > 0) {
      // console.log(attempts)
      console.log("\nQue pena. Voce nao acertou.");
      console.log(`Tente de novo. Voce ainda tem ${attempts} tentativas`);
      attempts--;
      question();
    } else {
      console.log("\nQue pena. Voce nao acertou e as tentativas acabaram :(");
      console.log("Quem sabe na proxima");
      readline.close();
    }
  });
};

question();
