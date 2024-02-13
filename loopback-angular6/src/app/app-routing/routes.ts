import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PlataformaListComponent } from '../plataforma-list/plataforma-list.component';
import { ProdutoHotmartListComponent } from '../produto-hotmart-list/produto-hotmart-list.component';
import { TokenAcessoListComponent } from '../token-acesso-list/token-acesso-list.component';
import { IdeiaPalavraChaveListComponent } from '../ideia-palavra-chave-list/ideia-palavra-chave-list.component';
import { ProdutoAfiliadoHotmartListComponent } from '../produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component';
import { ProdutoAfiliadoHotmartDetalheComponent } from '../produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component';
import { ModeloCampanhaAdsTesteListComponent } from '../modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component';
import { CampanhaAdsTesteListaComponent } from '../campanha-ads-teste-lista/campanha-ads-teste-lista.component';
import { AnuncioAdsListaComponent } from '../anuncio-ads-lista/anuncio-ads-lista.component';
import { PixelGoogleListComponent } from '../pixel-google-list/pixel-google-list.component';
import { CampanhaAdsTesteDetalheComponent } from '../campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component';
import { ContaGoogleListComponent } from '../conta-google-list/conta-google-list.component';
import { IdeiaPalavraChaveListSimplesMelhoresCpcComponent } from '../ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component';
import { IdeiaPalavraChaveListSimplesTopComponent } from '../ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component';
import { IdeiaPalavraChaveListSimplesTopPesquisaComponent } from '../ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component';
import { CampanhaAdsTesteListAtivaMetricaComponent } from '../campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component';
import { VisitaProdutoHotmartResumoComponent } from '../visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component';
import { ProdutosTopVendasComponent } from '../produtos-top-vendas/produtos-top-vendas.component';
import { ProdutoAfiliadoTrabalhoComponent } from '../produto-afiliado-trabalho/produto-afiliado-trabalho.component';
import { ProdutosBoaOpcaoIntermediariaComponent } from '../produtos-boa-opcao-intermediaria/produtos-boa-opcao-intermediaria.component';
import { LoadPaginaVendaListSimplesComponent } from '../load-pagina-venda-list-simples/load-pagina-venda-list-simples.component';
import { SolicitacaoCheckoutListSimplesComponent } from '../solicitacao-checkout-list-simples/solicitacao-checkout-list-simples.component';
import { CampanhaAdsMetricaListSimplesComponent } from '../campanha-ads-metrica-list-simples/campanha-ads-metrica-list-simples.component';
import { ListaEstiloFanartComponent } from '../lista-estilo-fanart/lista-estilo-fanart.component';
import { ProdutoPendenteEstruturaComponent } from '../produto-pendente-estrutura/produto-pendente-estrutura.component';
import { ProdutoObtemProximoTrabalhoComponent } from '../produto-obtem-proximo-trabalho/produto-obtem-proximo-trabalho.component';
import { ListaBomCrescimentoTemperaturaComponent } from '../lista-bom-crescimento-temperatura/lista-bom-crescimento-temperatura.component';
import { CampanhaAdsMetricaIntradayListSimplesComponent } from '../campanha-ads-metrica-intraday-list-simples/campanha-ads-metrica-intraday-list-simples.component';
import { HistoricoPorCodigoAdsComponent } from '../historico-por-codigo-ads/historico-por-codigo-ads.component';
import { AnuncioAdsDisplayPorProdutoListComponent } from '../anuncio-ads-display-por-produto-list/anuncio-ads-display-por-produto-list.component';
import { ListaAltaMargemAltaTemperaturaComponent } from '../lista-alta-margem-alta-temperatura/lista-alta-margem-alta-temperatura.component';
import { ListaSuperMargemComponent } from '../lista-super-margem/lista-super-margem.component';
import { ContaGoogleDetalheComponent } from '../conta-google-detalhe/conta-google-detalhe.component';
import { SecaoWebPorProdutoListComponent } from '../secao-web-por-produto-list/secao-web-por-produto-list.component';
import { ExperimentoModeloListComponent } from '../experimento-modelo-list/experimento-modelo-list.component';
import { ExperimentoModeloDetalheComponent } from '../experimento-modelo-detalhe/experimento-modelo-detalhe.component';
import { ModeloPaginaVendaListComponent } from '../modelo-pagina-venda-list/modelo-pagina-venda-list.component';
import { ElementoModeloPaginaVendaListComponent } from '../elemento-modelo-pagina-venda-list/elemento-modelo-pagina-venda-list.component';
import { ModeloPaginaVendaDetalheComponent } from '../modelo-pagina-venda-detalhe/modelo-pagina-venda-detalhe.component';
import { VersaoPaginaVendaDetalheComponent } from '../versao-pagina-venda-detalhe/versao-pagina-venda-detalhe.component';
import { DalleSolicitacaoImagemPorProdutoListComponent } from '../dalle-solicitacao-imagem-por-produto-list/dalle-solicitacao-imagem-por-produto-list.component';
import { DalleSolicitacaoComImagemPorProdutoListComponent } from '../dalle-solicitacao-com-imagem-por-produto-list/dalle-solicitacao-com-imagem-por-produto-list.component';
import { CampanhaAdsMetricaIntradayPorCampanhaListComponent } from '../campanha-ads-metrica-intraday-por-campanha-list/campanha-ads-metrica-intraday-por-campanha-list.component';
import { CampanhaAdsMetricaIntradayCtrListComponent } from '../campanha-ads-metrica-intraday-ctr-list/campanha-ads-metrica-intraday-ctr-list.component';
import { PaginaVendaPropriaPorProdutoListComponent } from '../pagina-venda-propria-por-produto-list/pagina-venda-propria-por-produto-list.component';
import { PublicoAlvoAdsPalavraListComponent } from '../publico-alvo-ads-palavra-list/publico-alvo-ads-palavra-list.component';
import { PublicoAlvoAdsPalavraDetalheComponent } from '../publico-alvo-ads-palavra-detalhe/publico-alvo-ads-palavra-detalhe.component';
import { ProdutoProprioListComponent } from '../produto-proprio-list/produto-proprio-list.component';
import { ProdutoProprioDetalheComponent } from '../produto-proprio-detalhe/produto-proprio-detalhe.component';
import { ProdutoProprioVersaoDetalheComponent } from '../produto-proprio-versao-detalhe/produto-proprio-versao-detalhe.component';
import { ImagemConjuntoPorProdutoListComponent } from '../imagem-conjunto-por-produto-list/imagem-conjunto-por-produto-list.component';
import { AnuncioConceitoAdsRedeDisplayPorProdutoListComponent } from '../anuncio-conceito-ads-rede-display-por-produto-list/anuncio-conceito-ads-rede-display-por-produto-list.component';
import { CampanhaAdsRedeDisplayPorProdutoListComponent } from '../campanha-ads-rede-display-por-produto-list/campanha-ads-rede-display-por-produto-list.component';
import { ModeloPaginaVendaDetalheComCampanhasComponent } from '../modelo-pagina-venda-detalhe-com-campanhas/modelo-pagina-venda-detalhe-com-campanhas.component';



export const routes : Routes = [
    { path: 'home' , component: TokenAcessoListComponent },

    { path: 'plataforma' , component: PlataformaListComponent },
    { path: 'produtoHotmart' , component : ProdutoHotmartListComponent },
    { path: 'tokenAcesso' , component : TokenAcessoListComponent },
    { path: 'ideiaPalavraChave' , component: IdeiaPalavraChaveListComponent },
    { path: 'produtoAfiliadoHotmart' , component: ProdutoAfiliadoHotmartListComponent },
    { path: 'produtoAfiliadoHotmartDetalhe/:id' , component: ProdutoAfiliadoHotmartDetalheComponent },
    { path: 'modeloCampanhaAdsTeste' , component: ModeloCampanhaAdsTesteListComponent },
    { path: 'pixelGoogle' , component: PixelGoogleListComponent },
    { path: 'contaGoogle' , component: ContaGoogleListComponent },

    { path: 'resumoVisitaHotmart' , component: VisitaProdutoHotmartResumoComponent },

    { path: 'anuncioAds/:id' , component: AnuncioAdsListaComponent },
    { path: 'campanhaAdsTeste/:id' , component: CampanhaAdsTesteListaComponent },
    { path: 'campanhaAdsTesteDetalhe/:id' , component: CampanhaAdsTesteDetalheComponent },
    { path: 'contaGoogleDetalhe/:id' , component: ContaGoogleDetalheComponent },

    { path: 'melhoresCpc' , component: IdeiaPalavraChaveListSimplesMelhoresCpcComponent },
    { path: 'melhoresTop' , component: IdeiaPalavraChaveListSimplesTopComponent },
    { path: 'melhoresTopPesquisa' , component: IdeiaPalavraChaveListSimplesTopPesquisaComponent },

    { path: 'campanhaAdsTesteAtivaMetrica' , component: CampanhaAdsTesteListAtivaMetricaComponent },

    { path: 'produtosTopVendas' , component: ProdutosTopVendasComponent },
    { path: 'afiliadoMedio' , component: ProdutosBoaOpcaoIntermediariaComponent },
    { path: 'produtoAfiliadoTrabalho' , component: ProdutoAfiliadoTrabalhoComponent },
    { path: 'acessos' ,  component: LoadPaginaVendaListSimplesComponent },
    { path: 'checkout' , component: SolicitacaoCheckoutListSimplesComponent },
    { path: 'metricaCampanha' , component: CampanhaAdsMetricaListSimplesComponent },
    { path: 'estiloFanart' , component: ListaEstiloFanartComponent },
    { path: 'pendenteEstrutura' , component: ProdutoPendenteEstruturaComponent },    
    { path: 'workProduto/:id' , component: ProdutoObtemProximoTrabalhoComponent },
    { path: 'crescimentoTemperatura' , component: ListaBomCrescimentoTemperaturaComponent },
    { path: 'campanhaAdsMetricaIntradayListSimples' , component: CampanhaAdsMetricaIntradayListSimplesComponent },
    { path: 'historicoPorCodigoAds/:id' , component: HistoricoPorCodigoAdsComponent },
    { path: 'anuncioAdsDisplayPorProdutoList/:id' , component: AnuncioAdsDisplayPorProdutoListComponent },

    { path : 'listaAltaMargemAltaTemperatura' , component: ListaAltaMargemAltaTemperaturaComponent },
    { path : 'listaSuperMargem' , component: ListaSuperMargemComponent },

    { path : 'paginaVendaPropriaPorProduto/:hotmartId' , component: PaginaVendaPropriaPorProdutoListComponent },
    { path : 'secaoWebPorProduto/:hotmartId' , component: SecaoWebPorProdutoListComponent },

    { path : 'experimentoModeloList' , component: ExperimentoModeloListComponent },
    { path : 'experimentoModeloDetalhe/:id' , component: ExperimentoModeloDetalheComponent },

    { path : 'modeloPaginaVenda' , component: ModeloPaginaVendaListComponent },
    { path : 'elmentoModeloPaginaVenda' , component: ElementoModeloPaginaVendaListComponent },
    { path : 'modeloPaginaVendaDetalhe/:id' , component: ModeloPaginaVendaDetalheComponent },

    { path: 'solicitacaoImagemPorProduto/:id' , component : DalleSolicitacaoImagemPorProdutoListComponent },
    { path: 'dalleComImagemPorProduto/:id' , component: DalleSolicitacaoComImagemPorProdutoListComponent },

    { path: 'versaoPaginaVendaDetalhe/:id' , component: VersaoPaginaVendaDetalheComponent },
  
    { path: 'campanhaAdsMetricaIntradayPorCampanhaList/:id' , component: CampanhaAdsMetricaIntradayPorCampanhaListComponent },
    
    { path: 'campanhaAdsMetricaIntradayCtrList' , component: CampanhaAdsMetricaIntradayCtrListComponent },
    { path: 'publicoAlvoAdsPalavraList' , component: PublicoAlvoAdsPalavraListComponent },

    { path: 'publicoAlvoAdsPalavraDetalhe/:id' , component: PublicoAlvoAdsPalavraDetalheComponent },

    { path: 'produtoProprioList' , component: ProdutoProprioListComponent },
    { path: 'produtoProprioDetalhe/:id' , component: ProdutoProprioDetalheComponent },
    { path: 'produtoProprioVersaoDetalhe/:id' , component: ProdutoProprioVersaoDetalheComponent },

    { path: 'imagemConjuntoPorProdutoList/:id' , component: ImagemConjuntoPorProdutoListComponent },
    { path: 'anuncioConceitoAdsRedeDisplayPorProdutoList/:id' , component: AnuncioConceitoAdsRedeDisplayPorProdutoListComponent },

    { path: 'campanhaAdsRedeDisplayPorProdutoList/:id' , component: CampanhaAdsRedeDisplayPorProdutoListComponent },
    { path: 'modeloPaginaVendaDetalheComCampanhas/:id' , component: ModeloPaginaVendaDetalheComCampanhasComponent },

    { path: '',  component: HomeComponent  }
    //{ path: '',          redirectTo: 'home', pathMatch: 'full' }
]  