package gerador.criapixelprodutohotmartconta.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.PixelProdutoHotmartConta;
import gerador.criapixelprodutohotmartconta.passo.PixelProdutoHotmartConta_RegistraLista;



public class PixelProdutoHotmartConta_RegistraListaImpl extends PixelProdutoHotmartConta_RegistraLista {

	@Override
	protected boolean executaCustom(List<PixelProdutoHotmartConta> listaPixelProduto) {
		this.listaItem = listaPixelProduto;
		if (this.listaItem.size()>0) {
			return true;
		} else {
			return false;
		}
	} 


}

