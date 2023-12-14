package gerador.atualizaafiliados.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.ProdutoAfiliadoHotmart;
import gerador.atualizaafiliados.passo.*;



public class ProdutoAfiliadoHotmart_AtualizaAfiliadosImpl extends ProdutoAfiliadoHotmart_AtualizaAfiliados {

	@Override
	protected boolean executaCustom(List<ProdutoAfiliadoHotmart> listaAfiliado) {
		this.listaAfiliado = listaAfiliado;
		return true;
	} 


}

