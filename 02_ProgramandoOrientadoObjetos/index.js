import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

//repetição de código- maneira correta em Cliente.js:
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

==============================

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(-100);
const valorSacado = contaCorrenteRicardo.sacar(50);
  