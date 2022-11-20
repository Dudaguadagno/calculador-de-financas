const janeiro = new Mes ("janeiro");
janeiro.adicionarLancamento (new Lancamento("salário", "receita", 3000));
janeiro.adicionarLancamento (new Lancamento("aluguel", "despesa", 1000)); 
janeiro.adicionarLancamento (new Lancamento("conta de luz", "despesa", 200)); 
janeiro.adicionarLancamento (new Lancamento("conta de agua", "despesa", 100));
janeiro.adicionarLancamento (new Lancamento("internet", "despesa", 100));
janeiro.adicionarLancamento (new Lancamento("transporte", "despesa", 300));
janeiro.adicionarLancamento (new Lancamento("lazer", "despesa", 300)); 
janeiro.adicionarLancamento (new Lancamento("alimentação", "despesa", 500));
janeiro.adicionarLancamento (new Lancamento("condominio", "despesa", 300)); 
janeiro.adicionarLancamento (new Lancamento("farmacia", "despesa", 100));      

const fevereiro = new Mes ("fevereiro"); 
fevereiro.adicionarLancamento(new Lancamento("salatio", "receita", 3000)); 
fevereiro.adicionarLancamento(new Lancamento("aluguel", "despesa", 1200)); 
fevereiro.adicionarLancamento(new Lancamento("conta de luz", "despesa", 250)); 
fevereiro.adicionarLancamento(new Lancamento("conta de agua", "despesa", 100)); 
fevereiro.adicionarLancamento(new Lancamento("internet", "despesa", 100)); 
fevereiro.adicionarLancamento(new Lancamento("transporte", "despesa", 500)); 
fevereiro.adicionarLancamento(new Lancamento("alimentação", "despesa", 1000)); 
fevereiro.adicionarLancamento(new Lancamento("condominio", "despesa", 400));        

const marco = new Mes ("marco");
marco.adicionarLancamento(new Lancamento("salario", "receita", 4000));
marco.adicionarLancamento(new Lancamento("aluguel", "despesa", 1200)); 
marco.adicionarLancamento(new Lancamento("conta de luz", "despesa", 200)); 
marco.adicionarLancamento(new Lancamento("conta de agua", "despesa", 100)); 
marco.adicionarLancamento(new Lancamento("internet", "despesa", 200)); 
marco.adicionarLancamento(new Lancamento("transporte", "despesa", 500)); 
marco.adicionarLancamento(new Lancamento("lazer", "despesa", 800)); 
marco.adicionarLancamento(new Lancamento("alimentação", "despesa", 1000)); 
marco.adicionarLancamento(new Lancamento("condominio", "despesa", 400));

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.calcularSaldo();

//console.log(janeiro);
//console.log(fevereiro);
//console.log(marco);


janeiro.adicionarLancamento(new Lancamento("escola", "despesa", 500));

