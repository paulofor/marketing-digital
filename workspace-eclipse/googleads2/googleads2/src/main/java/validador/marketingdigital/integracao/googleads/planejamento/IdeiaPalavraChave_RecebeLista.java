package validador.marketingdigital.integracao.googleads.planejamento;

import com.strongloop.android.loopback.RestAdapter;
import com.strongloop.android.loopback.callbacks.VoidCallback;

import validador.marketingdigital.integracao.daobase.DaoBase;
import validador.marketingdigital.integracao.daobase.DummyDaoBase;
import validador.marketingdigital.integracao.daobase.comum.DaoBaseComum;
import validador.marketingdigital.integracao.googleads.app.BuscaPalavraDataset;
import validador.marketingdigital.integracao.lookback.repositorio.RepositorioIdeiaPalavraChave;

public class IdeiaPalavraChave_RecebeLista extends DaoBaseComum{

	
	private RestAdapter adapter = new RestAdapter(DaoBaseComum.urlLoopback); 
	protected RepositorioIdeiaPalavraChave repPalavraChave = adapter.createRepository(RepositorioIdeiaPalavraChave.class);

	
	public IdeiaPalavraChave_RecebeLista() {
		this.dummy = new DummyDaoBase();
	}
	
	
	@Override
	protected long getTempo() {
		return 3000;
	}

	@Override
	protected void executaImpl() {
		System.out.println("Enviando lista");
		final BuscaPalavraDataset ds = (BuscaPalavraDataset) getComum(); 
		repPalavraChave.recebeLista(ds.getListaPalavraChave(), new VoidCallback() {
			@Override
			public void onSuccess() {
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
		return this.dummy;
	}

	
	
}
