const idadeComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destinoEscolhido = "Salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhado;
  console.log("comprador maior de idade ou está acompanhado");
  temPassagemComprada = true;

let contador = 0; //só colocando assim ele fica num loop infinito sem sair da posição 0
let destinoExiste = false;

while(contador < 3){
  if(listaDeDestinos[contador] == destino){
    console.log('destino existe');
    destinoExiste = true;
    break;
  } else {
    console.log('destino não existe');
    break;
  }
  contador += 1; // contador é igual a ele + 1
}

// while sempre precisará de uma expressão condicional que definirá 
//quando o laço deve ser interrompido = break

console.log("destino existe:", destinoExiste);

// ponto e vírgula (;) servem como divisor dentro do for
for( let cont = 0 ; cont < 3 ; cont = cont += 1 ){ // cont +=1 é utilizado assim: cont++
  if(listaDeDestinos[i] == destino){
    console.log('destino existe');
    destinoExiste = true;
    break;
  } else {
    console.log('destino não existe');
    break;
  }
}

// no for utilizam 'i' no lugar do 'cont' de 'contador'
// a linha 35 fica assim então: 
for( let i = 0 ; i < 3 ; i = cont += 1 )

// for( let cont = 0 ; cont < 3 ; cont = cont++ )
// for ( inicialização ; verifica ;  incrementa )