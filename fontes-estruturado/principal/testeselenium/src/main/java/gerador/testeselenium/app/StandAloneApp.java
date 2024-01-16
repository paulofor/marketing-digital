package gerador.testeselenium.app;

import gerador.testeselenium.passo.exemplos.TesteSeleniumParse;

public class StandAloneApp {

	public static void main(String[] args) {
		TesteSeleniumParse pagina = new TesteSeleniumParse();
		pagina.inicializaPagina();
	}

}
