package gerador.gravacaolocalimagemconteudo.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private EntregavelProduto entregavelCorrente;
	private List<ConteudoProdutoKiwify> conteudoLista;


	public void setEntregavelCorrente(EntregavelProduto valor) { 
		this.entregavelCorrente = valor;
	}
	public EntregavelProduto getEntregavelCorrente() { 
		return this.entregavelCorrente;
	}
	public void setConteudoLista(List<ConteudoProdutoKiwify> valor) { 
		this.conteudoLista = valor;
	}
	public List<ConteudoProdutoKiwify> getConteudoLista() { 
		return this.conteudoLista;
	}
}
