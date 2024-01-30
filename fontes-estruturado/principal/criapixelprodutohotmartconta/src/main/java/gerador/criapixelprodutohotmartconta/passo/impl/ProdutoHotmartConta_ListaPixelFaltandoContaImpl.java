package gerador.criapixelprodutohotmartconta.passo.impl;


import br.com.gersis.loopback.modelo.ContaGoogle;
import gerador.criapixelprodutohotmartconta.passo.*;



public class ProdutoHotmartConta_ListaPixelFaltandoContaImpl extends ProdutoHotmartConta_ListaPixelFaltandoConta {

	@Override
	protected boolean executaCustom(ContaGoogle contaCorrente) {
		this.idConta = contaCorrente.getIdInteger();
		return true;
	}


}

