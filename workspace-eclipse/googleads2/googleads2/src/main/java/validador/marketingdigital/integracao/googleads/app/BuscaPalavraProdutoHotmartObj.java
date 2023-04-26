package validador.marketingdigital.integracao.googleads.app;

import validador.marketingdigital.integracao.googleads.planejamento.VisitaProdutoHotmart_ListaParaPesquisaPalavraChave;

public class BuscaPalavraProdutoHotmartObj {

	
	
	public void executa() {
		
		BuscaPalavraDataset ds = new BuscaPalavraDataset();
		VisitaProdutoHotmart_ListaParaPesquisaPalavraChave servico = new VisitaProdutoHotmart_ListaParaPesquisaPalavraChave();
		servico.setComum(ds);
		servico.executa();
		System.out.println("Terminou obj");

	}

}
