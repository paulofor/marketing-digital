package gerador.obtemvendashotmart.loopback;


import com.strongloop.android.loopback.RestAdapter;

import br.com.gersis.daobase.DaoBase;
import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.daobase.comum.DaoBaseComum;
import br.com.gersis.loopback.repositorio.*;

public abstract class DaoAplicacao extends DaoBase {

	private RestAdapter adapter = new RestAdapter(DaoBaseComum.urlLoopback);
	protected RepositorioVisitaProdutoPlataforma repVisitaProdutoPlataforma = adapter.createRepository(RepositorioVisitaProdutoPlataforma.class);
	protected RepositorioTokenAcesso repTokenAcesso = adapter.createRepository(RepositorioTokenAcesso.class);
	protected RepositorioIdeiaPalavraChave repIdeiaPalavraChave = adapter.createRepository(RepositorioIdeiaPalavraChave.class);
	protected RepositorioPlataformaVenda repPlataformaVenda = adapter.createRepository(RepositorioPlataformaVenda.class);
	protected RepositorioProdutoPlataforma repProdutoPlataforma = adapter.createRepository(RepositorioProdutoPlataforma.class);
	protected RepositorioVisitaProdutoHotmart repVisitaProdutoHotmart = adapter.createRepository(RepositorioVisitaProdutoHotmart.class);
	protected RepositorioCampanhaAds repCampanhaAds = adapter.createRepository(RepositorioCampanhaAds.class);
	protected RepositorioAnuncioCampanhaAds repAnuncioCampanhaAds = adapter.createRepository(RepositorioAnuncioCampanhaAds.class);
	protected RepositorioPalavraChaveCampanhaAds repPalavraChaveCampanhaAds = adapter.createRepository(RepositorioPalavraChaveCampanhaAds.class);
	protected RepositorioCampanhaAdsTeste repCampanhaAdsTeste = adapter.createRepository(RepositorioCampanhaAdsTeste.class);
	protected RepositorioAnuncioCampanhaAdsTeste repAnuncioCampanhaAdsTeste = adapter.createRepository(RepositorioAnuncioCampanhaAdsTeste.class);
	protected RepositorioAnuncioAds repAnuncioAds = adapter.createRepository(RepositorioAnuncioAds.class);
	protected RepositorioModeloCampanhaAdsTeste repModeloCampanhaAdsTeste = adapter.createRepository(RepositorioModeloCampanhaAdsTeste.class);
	protected RepositorioPixelGoogle repPixelGoogle = adapter.createRepository(RepositorioPixelGoogle.class);
	protected RepositorioProdutoAfiliadoHotmart repProdutoAfiliadoHotmart = adapter.createRepository(RepositorioProdutoAfiliadoHotmart.class);
	protected RepositorioPalavraChaveCampanhaAdsTeste repPalavraChaveCampanhaAdsTeste = adapter.createRepository(RepositorioPalavraChaveCampanhaAdsTeste.class);
	protected RepositorioAgendaVisitaHotmart repAgendaVisitaHotmart = adapter.createRepository(RepositorioAgendaVisitaHotmart.class);
	protected RepositorioProdutoHotmart repProdutoHotmart = adapter.createRepository(RepositorioProdutoHotmart.class);
	protected RepositorioFacebookConta repFacebookConta = adapter.createRepository(RepositorioFacebookConta.class);
	protected RepositorioProdutoAfiliadoMetrica repProdutoAfiliadoMetrica = adapter.createRepository(RepositorioProdutoAfiliadoMetrica.class);
	protected RepositorioContaGoogle repContaGoogle = adapter.createRepository(RepositorioContaGoogle.class);
	protected RepositorioCampanhaAdsMetrica repCampanhaAdsMetrica = adapter.createRepository(RepositorioCampanhaAdsMetrica.class);


	@Override
	protected long getTempo() {
		return 10000;
	}

	@Override
	protected IDatasetComum criaDataSet() {
		return new DatasetAplicacao();
	}

	@Override
	protected DaoBase getProximo() {
		return null;
	} 

}
