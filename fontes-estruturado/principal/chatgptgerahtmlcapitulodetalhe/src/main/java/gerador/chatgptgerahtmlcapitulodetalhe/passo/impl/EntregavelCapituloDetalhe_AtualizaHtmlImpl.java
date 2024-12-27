package gerador.chatgptgerahtmlcapitulodetalhe.passo.impl;


import br.com.gersis.loopback.modelo.EntregavelCapituloDetalhe;
import gerador.chatgptgerahtmlcapitulodetalhe.passo.EntregavelCapituloDetalhe_AtualizaHtml;



public class EntregavelCapituloDetalhe_AtualizaHtmlImpl extends EntregavelCapituloDetalhe_AtualizaHtml {

	@Override
	protected boolean executaCustom(EntregavelCapituloDetalhe itemAltera) {
		this.html = itemAltera.getHtml();
		this.idDetalhe = itemAltera.getIdInteger();
		return true;
	} 


}

