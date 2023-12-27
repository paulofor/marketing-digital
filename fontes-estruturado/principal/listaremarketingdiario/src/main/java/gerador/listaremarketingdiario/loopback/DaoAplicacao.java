package gerador.listaremarketingdiario.loopback;


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
	protected RepositorioSolicitacaoCheckout repSolicitacaoCheckout = adapter.createRepository(RepositorioSolicitacaoCheckout.class);
	protected RepositorioLoadPaginaVenda repLoadPaginaVenda = adapter.createRepository(RepositorioLoadPaginaVenda.class);
	protected RepositorioPlanoProduto repPlanoProduto = adapter.createRepository(RepositorioPlanoProduto.class);
	protected RepositorioContaGoogleMetricaMes repContaGoogleMetricaMes = adapter.createRepository(RepositorioContaGoogleMetricaMes.class);
	protected RepositorioLinkCheckout repLinkCheckout = adapter.createRepository(RepositorioLinkCheckout.class);
	protected RepositorioCampanhaAdsMetricaIntraday repCampanhaAdsMetricaIntraday = adapter.createRepository(RepositorioCampanhaAdsMetricaIntraday.class);
	protected RepositorioPrecoProdutoAfiliado repPrecoProdutoAfiliado = adapter.createRepository(RepositorioPrecoProdutoAfiliado.class);
	protected RepositorioAnuncioAdsDisplay repAnuncioAdsDisplay = adapter.createRepository(RepositorioAnuncioAdsDisplay.class);
	protected RepositorioImagemConjunto repImagemConjunto = adapter.createRepository(RepositorioImagemConjunto.class);
	protected RepositorioVisitante repVisitante = adapter.createRepository(RepositorioVisitante.class);
	protected RepositorioProdutoProprio repProdutoProprio = adapter.createRepository(RepositorioProdutoProprio.class);
	protected RepositorioVideoExecucaoPaginaVenda repVideoExecucaoPaginaVenda = adapter.createRepository(RepositorioVideoExecucaoPaginaVenda.class);
	protected RepositorioProdutoAfiliadoHotlink repProdutoAfiliadoHotlink = adapter.createRepository(RepositorioProdutoAfiliadoHotlink.class);
	protected RepositorioTagIdSecaoPaginaVenda repTagIdSecaoPaginaVenda = adapter.createRepository(RepositorioTagIdSecaoPaginaVenda.class);
	protected RepositorioCampanhaAdsRedeDisplay repCampanhaAdsRedeDisplay = adapter.createRepository(RepositorioCampanhaAdsRedeDisplay.class);
	protected RepositorioOtimizacaoCampanhaAdsRedeDisplay repOtimizacaoCampanhaAdsRedeDisplay = adapter.createRepository(RepositorioOtimizacaoCampanhaAdsRedeDisplay.class);
	protected RepositorioPaginaVenda repPaginaVenda = adapter.createRepository(RepositorioPaginaVenda.class);
	protected RepositorioPublicoAlvoAds repPublicoAlvoAds = adapter.createRepository(RepositorioPublicoAlvoAds.class);
	protected RepositorioPublicoAlvoAdsDiario repPublicoAlvoAdsDiario = adapter.createRepository(RepositorioPublicoAlvoAdsDiario.class);
	protected RepositorioFaixaHorarioCampanhaAds repFaixaHorarioCampanhaAds = adapter.createRepository(RepositorioFaixaHorarioCampanhaAds.class);
	protected RepositorioAnuncioCampanhaAdsDisplay repAnuncioCampanhaAdsDisplay = adapter.createRepository(RepositorioAnuncioCampanhaAdsDisplay.class);
	protected RepositorioMetaVenda repMetaVenda = adapter.createRepository(RepositorioMetaVenda.class);
	protected RepositorioMercadoAlvo repMercadoAlvo = adapter.createRepository(RepositorioMercadoAlvo.class);
	protected RepositorioProdutoMercado repProdutoMercado = adapter.createRepository(RepositorioProdutoMercado.class);
	protected RepositorioPaginaVendaPrecoProduto repPaginaVendaPrecoProduto = adapter.createRepository(RepositorioPaginaVendaPrecoProduto.class);
	protected RepositorioConcorrenteAfiliado repConcorrenteAfiliado = adapter.createRepository(RepositorioConcorrenteAfiliado.class);
	protected RepositorioSegmentoMercadoIntereseAds repSegmentoMercadoIntereseAds = adapter.createRepository(RepositorioSegmentoMercadoIntereseAds.class);
	protected RepositorioContaHotmart repContaHotmart = adapter.createRepository(RepositorioContaHotmart.class);
	protected RepositorioProdutoAfiliadoHotmartPendente repProdutoAfiliadoHotmartPendente = adapter.createRepository(RepositorioProdutoAfiliadoHotmartPendente.class);


	@Override
	protected long getTempo() {
		return 5000;
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
