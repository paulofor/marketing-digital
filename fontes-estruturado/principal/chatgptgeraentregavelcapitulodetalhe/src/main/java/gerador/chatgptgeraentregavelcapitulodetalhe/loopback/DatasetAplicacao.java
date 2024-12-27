package gerador.chatgptgeraentregavelcapitulodetalhe.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private EntregavelProduto entregavelProdutoCorrente;
	private EntregavelCapituloDetalhe itemDetalhe;
	private List<EntregavelCapituloDetalhe> listaDetalhe;


	public void setEntregavelProdutoCorrente(EntregavelProduto valor) { 
		this.entregavelProdutoCorrente = valor;
	}
	public EntregavelProduto getEntregavelProdutoCorrente() { 
		return this.entregavelProdutoCorrente;
	}
	public void setItemDetalhe(EntregavelCapituloDetalhe valor) { 
		this.itemDetalhe = valor;
	}
	public EntregavelCapituloDetalhe getItemDetalhe() { 
		return this.itemDetalhe;
	}
	public void setListaDetalhe(List<EntregavelCapituloDetalhe> valor) { 
		this.listaDetalhe = valor;
	}
	public List<EntregavelCapituloDetalhe> getListaDetalhe() { 
		return this.listaDetalhe;
	}
}
