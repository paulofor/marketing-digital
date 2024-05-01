package gerador.geraimagempaginaexemplogrupowhatsapp.passo.impl;


import br.com.gersis.loopback.modelo.PaginaWhatsappExemplo;
import br.com.gersis.loopback.modelo.PaginaWhatsappGrupo;
import gerador.geraimagempaginaexemplogrupowhatsapp.passo.*;
import teste.ObtemFiguraPagina;



public class GeraImagemComSeleniumImpl extends GeraImagemComSelenium { 

	final String PATH_IMAGENS = "/var/www/palfmarketing.online/www/imagem-pagina-exemplo";
	final String PREFIXO_URL = "http://www.palfmarketing.online/imagem-pagina-exemplo";

	



	@Override
	protected boolean executaCustom(PaginaWhatsappExemplo paginaCorrente) {
		try {
			ObtemFiguraPagina selenium = new ObtemFiguraPagina();
			selenium.setUrl(paginaCorrente.getUrl());
			selenium.setArquivoImagem("/home/usuario/aplicacoes/MarketingDigital/imagem/paginaExemplo_" + paginaCorrente.getIdInteger() + ".png");
			selenium.executaLeitura();
			this.saidaPaginaCorrente = paginaCorrente;
			long timestamp = System.currentTimeMillis();
			String fonte = selenium.getArquivoImagem();
			String nomeImagem = timestamp + paginaCorrente.getIdInteger() + ".png";
			String destino = PATH_IMAGENS + "/" + nomeImagem;
			enviaParaServidor(fonte, destino);
			String urlImagem = PREFIXO_URL + "/" + nomeImagem;
			this.saidaPaginaCorrente.setUrlImagem(urlImagem);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	} 


}

