const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let area;
let tecnologia;
let especializacao;
let novasTecnologias = [];

const primeiraPergunta = function () {
  readline.question(
    "Deseja seguir Front-End ou Back-End? Resposta: ",
    (areaEscolhida) => {
      if (areaEscolhida === "Front-End") {
        area = areaEscolhida;
        readline.question(
          "Quer aprender React ou Vue? Resposta: ",
          (tecnologiaInformada) => {
            if (
              tecnologiaInformada != "React" &&
              tecnologiaInformada != "Vue"
            ) {
              console.log("Não entendi sua resposta");
              primeiraPergunta();
            }
            tecnologia = tecnologiaInformada;
            segundaPergunta();
          }
        );
      } else if (areaEscolhida === "Back-End") {
        area = areaEscolhida;
        readline.question(
          "Quer aprender C# ou Java? Resposta: ",
          (tecnologiaInformada) => {
            if (tecnologiaInformada != "C#" && tecnologiaInformada != "Java") {
              console.log("Não entendi sua resposta");
              primeiraPergunta();
            }
            tecnologia = tecnologiaInformada;
            segundaPergunta();
          }
        );
      } else {
        console.log("Não entendi sua resposta");
        primeiraPergunta();
      }
      //   readline.close();
    }
  );
};

const segundaPergunta = function () {
  readline.question(
    "Digite '1' caso deseja continuar se especializando na área escolhida ou '2' seguir deseja seguir desenvolvendo para se tornar Fullstack? Resposta: ",
    (especializacaoInformada) => {
      if (especializacaoInformada == 1) {
        especializacao = 'Se aprofundar na tecnologia';
        console.log(
          "Se aprofundar em uma area ajuda muito a ser um bom profissional!"
        );
        terceiraPergunta();
      } else if (especializacaoInformada == 2) {
        especializacao = 'Virar Fullstack';
        console.log(
          "Aprender varias tecnologia pode ajudar a ter vasto conhecimento na resolucao de problemas"
        );
        terceiraPergunta();
      } else {
        console.log("Nao entendi sua resposta");
        segundaPergunta();
      }
    }
  );
};

const terceiraPergunta = function () {
  let addNovaTecnologia = 1;
  if (addNovaTecnologia) {
    readline.question(
      "Tem mais alguma tecnologia que você gostaria de aprender? Digite '1' para SIM ou '0' para NAO. Resposta: ",
      (continuarAprendendo) => {
        if (continuarAprendendo == 1) {
          readline.question(
            "Qual nova tecnologia quer aprender? Resposta: ",
            (tecnologiaExtra) => {
              novasTecnologias.push(tecnologiaExtra);
              console.log(
                `Uau!! Aprender ${tecnologiaExtra} deve ser incrivel mesmo.`
              );
              terceiraPergunta();
            }
          );
        } else if (continuarAprendendo == 0) {
            console.log(`Legal. Essas são suas respostas: 
            Area: ${area}
            Tecnologia: ${tecnologia}
            Especializacao: ${especializacao}
            Novas Tecnologias: ${novasTecnologias}`)
            readline.close();
        } else {
            console.log('Nao entendi sua resposta');
            terceiraPergunta();
        }
      }
    );
  }
};

primeiraPergunta();
