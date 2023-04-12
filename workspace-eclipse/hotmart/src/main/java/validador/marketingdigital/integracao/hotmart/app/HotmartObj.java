package validador.marketingdigital.integracao.hotmart.app;

import validador.marketingdigital.integracao.hotmart.daobase.HotmartDataset;
import validador.marketingdigital.integracao.hotmart.daobase.TokenAcesso_ObtemPorNome;

public class HotmartObj {
	
		
	public void executa() {
		
		HotmartDataset ds = new HotmartDataset();
		TokenAcesso_ObtemPorNome servico = new TokenAcesso_ObtemPorNome();
		servico.setComum(ds);
		servico.executa();
		System.out.println("Terminou obj");

	}

}
