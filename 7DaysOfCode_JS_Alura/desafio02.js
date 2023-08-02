const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Nome: ', (name) => {
    readline.question('Idade: ', (age) => {
        readline.question('Linguagem: ', (language) => {
            console.log(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`);
            readline.close();
        })
    })
})



