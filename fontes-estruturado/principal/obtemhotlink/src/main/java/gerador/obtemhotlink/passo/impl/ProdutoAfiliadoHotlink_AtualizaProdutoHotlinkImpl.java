package gerador.obtemhotlink.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotlink;
import gerador.obtemhotlink.passo.*;



public class ProdutoAfiliadoHotlink_AtualizaProdutoHotlinkImpl extends ProdutoAfiliadoHotlink_AtualizaProdutoHotlink {

	@Override
	protected boolean executaCustom(List<ProdutoAfiliadoHotlink> listaHotlink) {
		this.listaHotlink = listaHotlink;
		return true;
	} 


}

