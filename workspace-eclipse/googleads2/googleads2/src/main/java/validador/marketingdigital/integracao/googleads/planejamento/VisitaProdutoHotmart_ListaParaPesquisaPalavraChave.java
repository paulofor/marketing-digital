package validador.marketingdigital.integracao.googleads.planejamento;



import java.util.List;

import com.strongloop.android.loopback.RestAdapter;
import com.strongloop.android.loopback.callbacks.ListCallback;

import validador.marketingdigital.integracao.daobase.DaoBase;
import validador.marketingdigital.integracao.daobase.comum.DaoBaseComum;
import validador.marketingdigital.integracao.googleads.app.BuscaPalavraDataset;
import validador.marketingdigital.integracao.lookback.modelo.VisitaProdutoHotmart;
import validador.marketingdigital.integracao.lookback.repositorio.RepositorioVisitaProdutoHotmart;


public class VisitaProdutoHotmart_ListaParaPesquisaPalavraChave  extends DaoBaseComum{

	
	private RestAdapter adapter = new RestAdapter(DaoBaseComum.urlLoopback); 
	protected RepositorioVisitaProdutoHotmart repProduto = adapter.createRepository(RepositorioVisitaProdutoHotmart.class);

	
	@Override
	protected long getTempo() {
		return 3000;
	}

	@Override
	protected void executaImpl() {
		final BuscaPalavraDataset ds = (BuscaPalavraDataset) getComum(); 
		repProduto.listaParaPesquisaPalavraChave(new ListCallback<VisitaProdutoHotmart>() {

			@Override
			public void onSuccess(List<VisitaProdutoHotmart> objects) {
				for (VisitaProdutoHotmart visita : objects) {
					ds.setVisitaProdutoCorrente(visita);
					executaProximoSemFinalizar();
				}
				finalizar();
			}

			@Override
			public void onError(Throwable t) {
				onErrorBase(t);
			}
			
		} );
	}

	@Override
	protected DaoBase getProximo() {
		return new GoogleAdsListaPalavraChave();
	}

	
	
}
