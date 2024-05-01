package gerador.gerafluxowhatsapptexto.passo.impl;


import br.com.gersis.loopback.modelo.WhatsappGrupoPadraoMensagem;
import gerador.gerafluxowhatsapptexto.passo.*;



public class ConteudoProdutoKiwify_CompletoPorEntregavelImpl extends ConteudoProdutoKiwify_CompletoPorEntregavel {

	@Override
	protected boolean executaCustom(WhatsappGrupoPadraoMensagem grupoPadraoCorrente) {
		this.idEntregavel = grupoPadraoCorrente.getEntregavelProdutoId();
		return true;
	} 


}

