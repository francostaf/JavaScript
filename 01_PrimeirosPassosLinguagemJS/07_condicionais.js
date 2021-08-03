const idadeComprador = 15;
const estaAcompanhado = true;

if(idadeComprador >= 18) {
  console.log("comprador maior de idade");
} else if(estaAcompanhado) {
    // não é necessário inserir '== true'
    console.log("comprador está acompanhado");
} else {
  console.log("comprador não está acompanhado");
}

//outra maneira de escrever o código acima
if(idadeComprador >= 18 || estaAcompanhado) {
  console.log("comprador maior de idade ou está acompanhado");
} else {
  console.log("comprador não está acompanhado");
}

