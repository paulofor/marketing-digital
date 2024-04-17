package gerador.geralistaconteudoproduto.passo.impl;


import java.util.List;

import br.com.gersis.loopback.modelo.ConteudoProdutoKiwify;
import gerador.geralistaconteudoproduto.passo.*;



public class ConteudoProdutoKiwify_CriaListaProdutoImpl extends ConteudoProdutoKiwify_CriaListaProduto {

	@Override
	protected boolean executaCustom(List<ConteudoProdutoKiwify> listaConteudo) {
		this.listaConteudo = listaConteudo;
		return true;
	} 


	
}

