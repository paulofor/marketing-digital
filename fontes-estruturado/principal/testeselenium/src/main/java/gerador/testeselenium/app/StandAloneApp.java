package gerador.testeselenium.app;

import gerador.testeselenium.passo.exemplos.SeleniumUtil;

public class StandAloneApp {

	public static void main(String[] args) {
		SeleniumUtil pagina = new SeleniumUtil();
		//pagina.setUrl("https://feo.palfmarketing.online/testeselenium.html");
		
		/*
		pagina.setUrl("https://desafio19dias.com/?ref=U88208988H");
		pagina.setArquivoHtml("arquivos/index.html");
		pagina.setArquivoTexto("arquivos/textos.txt");
		pagina.setArquivoStyle("arquivos/styles.css");
		*/
		//pagina.setUrl("https://lucasvieiramakeup.com/automaquiagem_afl?ref=V88563614U");
		//pagina.setArquivoHtml("arquivos/index-automaquiagem.html");
		//pagina.setArquivoTexto("arquivos/textos-automaquiagem.txt");
		//pagina.setArquivoStyle("arquivos/styles-automaquiagem.css");
		/*
		pagina.setUrl("https://desafio19dias.com/termos/");
		pagina.setArquivoHtml("arquivos/termos.html");
		pagina.setArquivoTexto("arquivos/textos-termos.txt");
		pagina.setArquivoStyle("arquivos/styles-termos.css");
		*/
		
		pagina.setUrl("https://cursonailacademy.com/?ref=H89889583A");
		pagina.setArquivoHtml("arquivos/index-unhas.html");
		pagina.setArquivoTexto("arquivos/textos-unhas.txt");
		pagina.setArquivoStyle("arquivos/styles-unhas.css");
		pagina.executa();
	}

}
