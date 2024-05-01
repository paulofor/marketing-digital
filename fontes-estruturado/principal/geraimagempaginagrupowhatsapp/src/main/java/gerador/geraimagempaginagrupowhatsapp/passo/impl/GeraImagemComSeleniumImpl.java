package gerador.geraimagempaginagrupowhatsapp.passo.impl;


import br.com.gersis.loopback.modelo.PaginaWhatsappGrupo;
import gerador.geraimagempaginagrupowhatsapp.passo.*;
import teste.ObtemFiguraPagina;



public class GeraImagemComSeleniumImpl extends GeraImagemComSelenium {
	
	final String PATH_IMAGENS = "/var/www/palfmarketing.online/www/imagem-pagina";
	final String PREFIXO_URL = "http://www.palfmarketing.online/imagem-pagina";

	@Override
	protected boolean executaCustom(PaginaWhatsappGrupo paginaCorrente) {
		try {
			ObtemFiguraPagina selenium = new ObtemFiguraPagina();
			selenium.setUrl(paginaCorrente.getUrl());
			selenium.setArquivoImagem("/home/usuario/aplicacoes/MarketingDigital/imagem/paginaGrupo_" + paginaCorrente.getIdInteger() + ".png");
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

