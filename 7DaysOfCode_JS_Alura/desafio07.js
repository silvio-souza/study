const { Console } = require("console");
const { read } = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("-----CALCULADORA-----");

const perguntaInicial = () => {
  console.log("\nInforme a operacao que deseja efetuar");
  readline.question(
    "Essas são as opcoes: SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO ou SAIR\n",
    (operacao) => {
      switch (operacao.toLocaleLowerCase()) {
        case "soma":
          somar();
          break;

        case "subtracao":
          subtrair();
          break;

        case "multiplicacao":
          multiplicar();
          break;

        case "divisao":
          dividir();
          break;

        case "sair":
          console.log("\nAte a proxima!\n");
          readline.close();
          break;

        default:
          console.log("Opcao nao encontrada. Tente de novo.");
          perguntaInicial();
      }
    }
  );
};

const somar = () => {
  const operacao = () => {
    console.log("\nInforme os numeros que deseja somar");
    readline.question("Primeiro numero: ", (num1) => {
      if (isNaN(Number(num1))) {
        console.log(
          `O caracter informado "${num1}" nao e um numero. Tente novamente`
        );
        operacao();
      } else {
        readline.question("Segundo numero: ", (num2) => {
          if (isNaN(Number(num2))) {
            console.log(
              `O caracter informado "${num2}" nao e um numero. Tente novamente`
            );
            operacao();
          } else {
            console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
            perguntaInicial();
          }
        });
      }
    });
  };
  operacao();
};

const subtrair = () => {
  const operacao = () => {
    console.log("\nInforme os numeros que deseja subtrair");
    readline.question("Primeiro numero: ", (num1) => {
      if (isNaN(Number(num1))) {
        console.log(
          `O caracter informado "${num1}" nao e um numero. Tente novamente`
        );
        operacao();
      } else {
        readline.question("Segundo numero: ", (num2) => {
          if (isNaN(Number(num2))) {
            console.log(
              `O caracter informado "${num2}" nao e um numero. Tente novamente`
            );
            operacao();
          } else {
            console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
            perguntaInicial();
          }
        });
      }
    });
  };
  operacao();
};

const multiplicar = () => {
  const operacao = () => {
    console.log("\nInforme os numeros que deseja multiplicar");
    readline.question("Primeiro numero: ", (num1) => {
      if (isNaN(Number(num1))) {
        console.log(
          `O caracter informado "${num1}" nao e um numero. Tente novamente`
        );
        operacao();
      } else {
        readline.question("Segundo numero: ", (num2) => {
          if (isNaN(Number(num2))) {
            console.log(
              `O caracter informado "${num2}" nao e um numero. Tente novamente`
            );
            operacao();
          } else {
            console.log(`${num1} x ${num2} = ${Number(num1) * Number(num2)}`);
            perguntaInicial();
          }
        });
      }
    });
  };
  operacao();
};

const dividir = () => {
  const operacao = () => {
    console.log("\nInforme os numeros que deseja dividir");
    readline.question("Primeiro numero: ", (num1) => {
      if (isNaN(Number(num1))) {
        console.log(
          `O caracter informado "${num1}" nao e um numero. Tente novamente`
        );
        operacao();
      } else {
        readline.question("Segundo numero: ", (num2) => {
          if (isNaN(Number(num2))) {
            console.log(
              `O caracter informado "${num2}" nao e um numero. Tente novamente`
            );
            operacao();
          } else if (num2 == 0) {
            console.log("Nao pode dividir por zero.");
            operacao();
          } else {
            console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
            perguntaInicial();
          }
        });
      }
    });
  };
  operacao();
};

perguntaInicial();
