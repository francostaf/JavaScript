//maneira correta de pensar para não ter repetição de código:
export class Cliente{
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