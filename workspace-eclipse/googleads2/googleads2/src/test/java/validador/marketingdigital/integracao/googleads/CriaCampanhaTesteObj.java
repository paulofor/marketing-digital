package validador.marketingdigital.integracao.googleads;

import validador.marketingdigital.integracao.daobase.DaoAplicacao;
import validador.marketingdigital.integracao.daobase.GoogleAdsDataset;


public class CriaCampanhaTesteObj extends DaoAplicacao {



	@Override
	protected void executaImpl() {

		GoogleAdsDataset ds = new GoogleAdsDataset();
		TokenAcesso_ObtemPorNome servico = new TokenAcesso_ObtemPorNome();
		servico.setComum(ds);
		servico.executa();
		System.out.println("Terminou obj");
	}

}
