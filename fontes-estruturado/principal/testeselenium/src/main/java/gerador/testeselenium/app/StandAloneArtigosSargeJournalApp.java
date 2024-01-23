package gerador.testeselenium.app;

import gerador.testeselenium.passo.exemplos.SeleniumArtigoUtil;

public class StandAloneArtigosSargeJournalApp {

	
	// https://journals.sagepub.com/doi/10.1177/14747049231225146
	// https://journals.sagepub.com/doi/10.1177/147470490700500310
	
	public static void main(String[] args) {
		SeleniumArtigoUtil pagina = new SeleniumArtigoUtil();
		pagina.setUrl("https://journals.sagepub.com/doi/10.1177/147470490700500310");
		pagina.setArquivoTexto("artigos/artigo1.txt");
		pagina.setTagId("bodymatter");
		pagina.executa();
	}
}
