package validador.marketingdigital.integracao.googleads.app;

import java.util.List;

import validador.marketingdigital.integracao.daobase.IDatasetComum;
import validador.marketingdigital.integracao.lookback.modelo.IdeiaPalavraChave;
import validador.marketingdigital.integracao.lookback.modelo.VisitaProdutoHotmart;

public class BuscaPalavraDataset implements IDatasetComum{
	
	VisitaProdutoHotmart visitaProdutoCorrente;
	List<IdeiaPalavraChave> listaPalavraChave;

	public VisitaProdutoHotmart getVisitaProdutoCorrente() {
		return visitaProdutoCorrente;
	}

	public void setVisitaProdutoCorrente(VisitaProdutoHotmart visitaProdutoCorrente) {
		this.visitaProdutoCorrente = visitaProdutoCorrente;
	}

	public List<IdeiaPalavraChave> getListaPalavraChave() {
		return listaPalavraChave;
	}

	public void setListaPalavraChave(List<IdeiaPalavraChave> listaPalavraChave) {
		this.listaPalavraChave = listaPalavraChave;
	}
	
	

}
