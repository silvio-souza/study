const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const listaDeCompras = {
  categorias: {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    outros: [],
  },
};

const categoriasListadas = Object.keys(listaDeCompras.categorias);

const perguntaInicial = function () {
  readline.question(
    "\nDeseja adicionar um item na lista de compras? Informe SIM ou NAO: ",
    (resp) => {
      if (resp.toLocaleLowerCase() == "sim") {
        perguntaAddItem();
      } else if (resp.toLocaleLowerCase() == "nao") {
        console.log("Aqui esta sua lista de compras: ");
        console.log(`Lista de Compras:`);
        categoriasListadas.forEach((categoria, i) => {
          console.log(`    ${categoria}:`);
          console.log(`        ${listaDeCompras.categorias[categoria]}`);
        });

        readline.close();
      } else {
        console.log("Nao entendi sua resposta");
        perguntaInicial();
      }
    }
  );
};

const perguntaAddItem = function () {
  readline.question("\nItem que deseja adicionar a lista: ", (item) => {
    console.log(
      `Informe a categoria do item ${item}? Digite uma das opcoes abaixo.`
    );
    readline.question(`${categoriasListadas}: `, (categoriaItem) => {
      let check = false;
      for (categoria of categoriasListadas) {
        if (categoria.toLocaleLowerCase() == categoriaItem.toLowerCase()) {
          check = true;
          //   console.log(check);
        }
      }
      if (!check) {
        console.log("Categoria informada nao encontrada. Tente de novo");
        perguntaAddItem();
      } else {
        listaDeCompras.categorias[categoriaItem.toLocaleLowerCase()].push(item);
        console.log(`${item} adicionado.`);
        perguntaInicial();
      }
    });
  });
};

perguntaInicial();
