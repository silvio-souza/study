const { Console } = require("console");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("-----CALCULADORA-----");

const perguntaInicial = () => {
  console.log("Informe a operacao que deseja efetuar");
  readline.question(
    "\nEssas são as opcoes: SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO ou SAIR",
    (operacao) => {
        switch(operacao.toLocaleLowerCase()) {
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
                console.log("Ate a proxima!");
                readline.close;

            default:
                console.log("Opcao nao encontrada. Tente de novo.");
        }   
        perguntaInicial();
    }
  );
};


const somar = () => {

}

const subtrair = () => {
    
}

const multiplicar = () => {
    
}

const dividir = () => {
    
}

perguntaInicial();