package gerador.obtemideiapalavrachaveads.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.IdeiaPalavraChave;
import br.com.gersis.loopback.modelo.VisitaProdutoHotmart;
import gerador.obtemideiapalavrachaveads.passo.*;



public class IdeiaPalavraChave_RecebeListaImpl extends IdeiaPalavraChave_RecebeLista {

	
	@Override
	protected boolean executaCustom(VisitaProdutoHotmart visitaCorrente, List<IdeiaPalavraChave> listaPalavraChave) {
		this.listaPalavra = listaPalavraChave;
		this.hotmartId = visitaCorrente.getHotmartId();
		return true;
	} 


}

