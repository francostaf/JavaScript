//repetição de código:
const cliente1Nome = "Ricardo";
const cliente1cpf = 11122233309;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2Nome = "Alice";
const cliente2cpf = 99922244409;
const cliente2Agencia = 1001;
const cliente2Saldo = 0;

const cliente3Nome = "Rafa";
const cliente3cpf = 66654644409;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;

//maneira correta de pensar para não ter repetição de código:
class Cliente{
  nome;
  cpf;
  agencia;
  saldo;
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;