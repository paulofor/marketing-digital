package gerador.geraimagemdalle.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private DalleSolicitacaoImagem solicitacaoCorrente;
	private List<ImagemPaginaVenda> listaImagem;


	public void setSolicitacaoCorrente(DalleSolicitacaoImagem valor) { 
		this.solicitacaoCorrente = valor;
	}
	public DalleSolicitacaoImagem getSolicitacaoCorrente() { 
		return this.solicitacaoCorrente;
	}
	public void setListaImagem(List<ImagemPaginaVenda> valor) { 
		this.listaImagem = valor;
	}
	public List<ImagemPaginaVenda> getListaImagem() { 
		return this.listaImagem;
	}
}
