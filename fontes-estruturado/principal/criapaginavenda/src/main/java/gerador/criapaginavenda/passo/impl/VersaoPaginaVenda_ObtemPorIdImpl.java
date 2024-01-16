package gerador.criapaginavenda.passo.impl;


import br.com.gersis.loopback.modelo.VersaoPaginaVenda;
import gerador.criapaginavenda.passo.*;



public class VersaoPaginaVenda_ObtemPorIdImpl extends VersaoPaginaVenda_ObtemPorId {

	@Override
	protected boolean executaCustom(VersaoPaginaVenda versaoCorrente) {
		this.idVersao = versaoCorrente.getIdInteger();
		return true;
	} 


}

