package gerador.geralistaconteudoproduto.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private EntregavelProduto entregavelCorrente;
	private List<ConteudoProdutoKiwify> listaConteudo;


	public void setEntregavelCorrente(EntregavelProduto valor) { 
		this.entregavelCorrente = valor;
	}
	public EntregavelProduto getEntregavelCorrente() { 
		return this.entregavelCorrente;
	}
	public void setListaConteudo(List<ConteudoProdutoKiwify> valor) { 
		this.listaConteudo = valor;
	}
	public List<ConteudoProdutoKiwify> getListaConteudo() { 
		return this.listaConteudo;
	}
}
