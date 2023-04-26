package validador.marketingdigital.integracao.googleads.app;

import validador.marketingdigital.integracao.daobase.comum.DaoBaseComum;

public class BuscaPalavraProdutoHotmartApp {

	public static void main(String[] args) {

		DaoBaseComum.setUrl("http://vps-40d69db1.vps.ovh.ca:23101/api");
		//DaoBaseComum.setUrl("http://localhost:23101/api");
		try {
			BuscaPalavraProdutoHotmartObj obj = new BuscaPalavraProdutoHotmartObj();
			obj.executa();
			System.exit(0);
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(-1);
		}
	}

}
