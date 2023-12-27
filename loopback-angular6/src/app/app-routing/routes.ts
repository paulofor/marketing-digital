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


    { path: '',  component: HomeComponent  }
    //{ path: '',          redirectTo: 'home', pathMatch: 'full' }
]