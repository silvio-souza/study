const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Instancia lista inicial vazia
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

//check se a lista esta vazia
const checkIfListIsEmpty = () => {
    let isEmpty = true;
    categoriasListadas.forEach((categoria, i) => {
      if (listaDeCompras.categorias[categoria].length > 0) {
        isEmpty = false;
      }
    });
  
    return isEmpty;
  };
  
  //imprime lista no momento atual
  const imprimirListaAtual = () => {
    console.log(`Lista de Compras:`);
    categoriasListadas.forEach((categoria, i) => {
      console.log(`    ${categoria}:`);
      console.log(`        ${listaDeCompras.categorias[categoria]}`);
    });
  };


// inicio das perguntas
const perguntaInicial = function () {
  readline.question(
    "\nDeseja adicionar um item na lista de compras? Informe SIM ou NAO ou CHECK para checar a lista atual: ",
    (resp) => {
      if (resp.toLocaleLowerCase() == "sim") {
        // SIM - ADD ITEM
        perguntaAddItem();
      } else if (resp.toLocaleLowerCase() == "nao") {
        // NAO - ADD ITEM
        readline.question(
          "Deseja deletar algum item da lista? Informe SIM ou NAO: ",
          (resp2) => {
            if (resp2.toLocaleLowerCase() == "sim") {
              // SIM - DELETE ITEM
              if (checkIfListIsEmpty()) {
                console.log("Sua lista ja esta vazia.");
                perguntaInicial();
              } else {
                perguntaDeletar();
              }
            } else if (resp2.toLocaleLowerCase() == "nao") {
              // NAO - DELETE ITEM (FINISH)
              console.log("Aqui esta sua lista de compras: ");
              imprimirListaAtual();

              readline.close();
            }
          }
        );
      } else if (resp.toLocaleLowerCase() == "check") {
        imprimirListaAtual();
        perguntaInicial();
      } else {
        // SEM RESPOSTA. LOOP
        console.log("Nao entendi sua resposta");
        perguntaInicial();
      }
    }
  );
};


// Pergunta para Add itens na lista
const perguntaAddItem = function () {
  readline.question("\nItem que deseja adicionar a lista: ", (item) => {
    console.log(
      `Informe a categoria do item ${item}? Digite uma das opcoes abaixo.`
    );
    readline.question(`${categoriasListadas}: `, (categoriaItem) => {
      let check = false;
      for (categoria of categoriasListadas) {
        if (categoria.toLocaleLowerCase() == categoriaItem.toLowerCase()) {
          check = true; //check se categoria informada existe

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

//Pergunta para deletar um item
const perguntaDeletar = () => {
  console.log("\nAqui esta sua lista atualmente: ");
  imprimirListaAtual();
  readline.question("\nInforme qual item deseja deletar: ", itemDeletar => {
    let itemDeletado = false;
    categoriasListadas.forEach((categoria, i) => {
        listaDeCompras.categorias[categoria].forEach((item, i) => {
            if (itemDeletar.toLocaleLowerCase() == item.toLocaleLowerCase()) {
                listaDeCompras.categorias[categoria].splice(i, 1);
                console.log(`Item ${item} foi removido com sucesso. Segue lista atualizada: `)
                imprimirListaAtual();
                itemDeletado = true; //check caso o item foi encontrado e deletado
            } 
        })
    });
    if (!itemDeletado) {
        console.log(`Item ${itemDeletar} não encontrado. Tente de novo.`)
    }
    perguntaInicial();
  });
};



perguntaInicial();
