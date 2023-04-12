package validador.marketingdigital.integracao.hotmart.daobase;

import com.strongloop.android.loopback.RestAdapter;
import com.strongloop.android.loopback.callbacks.ObjectCallback;

import validador.marketingdigital.integracao.daobase.DaoBase;
import validador.marketingdigital.integracao.daobase.comum.DaoBaseComum;
import validador.marketingdigital.integracao.hotmart.callback.HotmartSearchCallback;
import validador.marketingdigital.integracao.lookback.modelo.TokenAcesso;
import validador.marketingdigital.integracao.lookback.repositorio.RepositorioTokenAcesso;

public class TokenAcesso_ObtemPorNome  extends DaoBaseComum{

	private RestAdapter adapter = new RestAdapter(DaoBaseComum.urlLoopback); 
	protected RepositorioTokenAcesso repToken = adapter.createRepository(RepositorioTokenAcesso.class);

	
	
	@Override
	protected long getTempo() {
		return 5000;
	}

	@Override
	protected void executaImpl() {
		final HotmartDataset ds = (HotmartDataset) getComum();
		this.repToken.obtemPorNome(ds.getNomeToken(), new ObjectCallback<TokenAcesso>() {
			public void onError(Throwable t) {
				onErrorBase(t);
			}
			public void onSuccess(TokenAcesso tokenAcesso) {
				System.out.println("Peguei token: " + tokenAcesso.getToken());
				ds.setTokenAcesso(tokenAcesso);
				executaProximo();
			}
		});
	}

	@Override
	protected DaoBase getProximo() {
		return new HotmartSearchCallback();
	}
	
	
}
