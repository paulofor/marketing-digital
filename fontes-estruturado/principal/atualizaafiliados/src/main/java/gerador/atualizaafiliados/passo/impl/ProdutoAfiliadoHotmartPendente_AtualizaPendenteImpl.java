package gerador.atualizaafiliados.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmartPendente;
import gerador.atualizaafiliados.passo.ProdutoAfiliadoHotmartPendente_AtualizaPendente;



public class ProdutoAfiliadoHotmartPendente_AtualizaPendenteImpl extends ProdutoAfiliadoHotmartPendente_AtualizaPendente {

	@Override
	protected boolean executaCustom(List<ProdutoAfiliadoHotmartPendente> listaPendente) {
		this.listaHotmartId = listaPendente;
		return true;
	} 


	
}

