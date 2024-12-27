package gerador.chatgptgerahtmlcapitulodetalhe.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private List<EntregavelCapituloDetalhe> listaDetalhe;
	private EntregavelProduto entregavelCorrente;
	private EntregavelCapituloDetalhe itemAltera;


	public void setListaDetalhe(List<EntregavelCapituloDetalhe> valor) { 
		this.listaDetalhe = valor;
	}
	public List<EntregavelCapituloDetalhe> getListaDetalhe() { 
		return this.listaDetalhe;
	}
	public void setEntregavelCorrente(EntregavelProduto valor) { 
		this.entregavelCorrente = valor;
	}
	public EntregavelProduto getEntregavelCorrente() { 
		return this.entregavelCorrente;
	}
	public void setItemAltera(EntregavelCapituloDetalhe valor) { 
		this.itemAltera = valor;
	}
	public EntregavelCapituloDetalhe getItemAltera() { 
		return this.itemAltera;
	}
}
