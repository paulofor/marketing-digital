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
			selenium.setArquivoImagem("C:/Projetos/marketing-digital/imagem/" + paginaCorrente.getCodigoHexa() + ".png");
			selenium.executaLeitura();
			this.saidaPaginaCorrente = paginaCorrente;
			long timestamp = System.currentTimeMillis();
			String fonte = selenium.getArquivoImagem();
			String nomeImagem = timestamp + paginaCorrente.getIdInteger() + ".png";
			String destino = PATH_IMAGENS + "/" + nomeImagem;
			enviaParaServidor(fonte, destino);
			String urlImagem = PREFIXO_URL + "/" + nomeImagem;
			this.saidaPaginaCorrente.setUrlImagemCompleta(urlImagem);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
