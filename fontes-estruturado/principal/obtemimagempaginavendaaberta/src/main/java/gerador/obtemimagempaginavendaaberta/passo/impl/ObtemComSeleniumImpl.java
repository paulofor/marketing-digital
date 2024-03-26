package gerador.obtemimagempaginavendaaberta.passo.impl;

import br.com.gersis.loopback.modelo.PaginaVendaAberta;
import gerador.obtemimagempaginavendaaberta.passo.ObtemComSelenium;
import teste.ObtemFiguraPagina;

public class ObtemComSeleniumImpl extends ObtemComSelenium {
	

	final String PATH_IMAGENS = "/var/www/palfmarketing.online/www/imagem-pagina";
	final String PREFIXO_URL = "http://www.palfmarketing.online/imagem-pagina";
	
	@Override
	protected boolean executaCustom(PaginaVendaAberta paginaCorrente) {
		// TODO Auto-generated method stub
		try {
			ObtemFiguraPagina selenium = new ObtemFiguraPagina();
			selenium.setUrl(paginaCorrente.getUrlFinal());
			selenium.setArquivoImagem("/home/usuario/aplicacoes/MarketingDigital/imagem/" + paginaCorrente.getCodigoHexa() + ".png");
			selenium.executaLeitura();
			this.saidaPaginaCorrente = paginaCorrente;
			String fonte = selenium.getArquivoImagem();
			String destino = PATH_IMAGENS + "/pagina-venda-" + paginaCorrente.getIdInteger() + ".png";
			enviaParaServidor(fonte, destino);
			String urlImagem = PREFIXO_URL + "/pagina-venda-" + paginaCorrente.getIdInteger() + ".png";
			this.saidaPaginaCorrente.setUrlImagemCompleta(urlImagem);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
