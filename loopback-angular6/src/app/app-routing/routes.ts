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
import { VideoVslPorProdutoListComponent } from '../video-vsl-por-produto-list/video-vsl-por-produto-list.component';
import { VideoVslDetalheComponent } from '../video-vsl-detalhe/video-vsl-detalhe.component';
import { ModeloPaginaVendaVslListComponent } from '../modelo-pagina-venda-vsl-list/modelo-pagina-venda-vsl-list.component';
import { ScriptGeraVideoListComponent } from '../script-gera-video-list/script-gera-video-list.component';
import { PaginaVendaModeladaListComponent } from '../pagina-venda-modelada-list/pagina-venda-modelada-list.component';
import { PaginaVendaModeladaDetalheComponent } from '../pagina-venda-modelada-detalhe/pagina-venda-modelada-detalhe.component';
import { DalleSolicitacaoComImagemPorProdutoListBaseComponent } from '../dalle-solicitacao-com-imagem-por-produto-list/dalle-solicitacao-com-imagem-por-produto-list-base.component';
import { DalleSolicitacaoComImagemPorProprioListBaseComponent } from '../dalle-solicitacao-com-imagem-por-proprio-list/dalle-solicitacao-com-imagem-por-proprio-list-base.component';
import { EntregavelProdutoDetalheComponent } from '../entregavel-produto-detalhe/entregavel-produto-detalhe.component';
import { ConteudoProdutoKiwifyDetalheComponent } from '../conteudo-produto-kiwify-detalhe/conteudo-produto-kiwify-detalhe.component';
import { EstruturaPaginaVendaAbertaListComponent } from '../estrutura-pagina-venda-aberta-list/estrutura-pagina-venda-aberta-list.component';
import { EstruturaPaginaVendaAbertaDetalheComponent } from '../estrutura-pagina-venda-aberta-detalhe/estrutura-pagina-venda-aberta-detalhe.component';
import { PaginaVendaAbertaDetalheComponent } from '../pagina-venda-aberta-detalhe/pagina-venda-aberta-detalhe.component';
import { ItemEstruturaPaginaVendaDetalheComponent } from '../item-estrutura-pagina-venda-detalhe/item-estrutura-pagina-venda-detalhe.component';
import { MetaAdsCampanhaDetalheComponent } from '../meta-ads-campanha-detalhe/meta-ads-campanha-detalhe.component';
import { ContaInstagramListComponent } from '../conta-instagram-list/conta-instagram-list.component';
import { ContaFacebookListComponent } from '../conta-facebook-list/conta-facebook-list.component';
import { ContaWhatsappListComponent } from '../conta-whatsapp-list/conta-whatsapp-list.component';
import { WhatsappGrupoDetalheComponent } from '../whatsapp-grupo-detalhe/whatsapp-grupo-detalhe.component';
import { WhatsappGrupoPadraoMensagemDetalheComponent } from '../whatsapp-grupo-padrao-mensagem-detalhe/whatsapp-grupo-padrao-mensagem-detalhe.component';
import { MetaAdsCampanhaMetricaListSimplesComponent } from '../meta-ads-campanha-metrica-list-simples/meta-ads-campanha-metrica-list-simples.component';
import { MetaAdsAnuncioMetricaListSimplesComponent } from '../meta-ads-anuncio-metrica-list-simples/meta-ads-anuncio-metrica-list-simples.component';
import { WhatsappGrupoPadraoMensagemTextoDetalheComponent } from '../whatsapp-grupo-padrao-mensagem-texto-detalhe/whatsapp-grupo-padrao-mensagem-texto-detalhe.component';
import { MetaAdsConjuntoAnuncioDetalheComponent } from '../meta-ads-conjunto-anuncio-detalhe/meta-ads-conjunto-anuncio-detalhe.component';
import { PaginaWhatsappExemploListComponent } from '../pagina-whatsapp-exemplo-list/pagina-whatsapp-exemplo-list.component';
import { EntregavelProdutoListGeraImagemConteudoComponent } from '../entregavel-produto-list-gera-imagem-conteudo/entregavel-produto-list-gera-imagem-conteudo.component';
import { ConteudoProdutoKiwifyListGerarImagemComponent } from '../conteudo-produto-kiwify-list-gerar-imagem/conteudo-produto-kiwify-list-gerar-imagem.component';
import { PromptItemListCriaItemConteudoComponent } from '../prompt-item-list-cria-item-conteudo/prompt-item-list-cria-item-conteudo.component';
import { WhatsappGrupoListQtdeComponent } from '../whatsapp-grupo-list-qtde/whatsapp-grupo-list-qtde.component';
import { ImagemConjuntoListProcessoJavaComponent } from '../imagem-conjunto-list-processo-java/imagem-conjunto-list-processo-java.component';
import { EntregavelProdutoListParaGerarListaComponent } from '../entregavel-produto-list-para-gerar-lista/entregavel-produto-list-para-gerar-lista.component';
import { PalavraChaveRaizListComponent } from '../palavra-chave-raiz-list/palavra-chave-raiz-list.component';
import { PalavraChaveRaizDetalheComponent } from '../palavra-chave-raiz-detalhe/palavra-chave-raiz-detalhe.component';
import { PalavraChaveEstatisticaListMelhoresComponent } from '../palavra-chave-estatistica-list-melhores/palavra-chave-estatistica-list-melhores.component';
import { PalavraChaveEstatisticaListCrescimentoComponent } from '../palavra-chave-estatistica-list-crescimento/palavra-chave-estatistica-list-crescimento.component';
import { PlayerListComponent } from '../player-list/player-list.component';
import { FerramentaIaListComponent } from '../ferramenta-ia-list/ferramenta-ia-list.component';
import { PlataformaVendaListComponent } from '../plataforma-venda-list/plataforma-venda-list.component';
import { ProdutoAfiliadoGenericoListComponent } from '../produto-afiliado-generico-list/produto-afiliado-generico-list.component';
import { ProdutoAfiliadoHotmartListLowTicketComponent } from '../produto-afiliado-hotmart-list-low-ticket/produto-afiliado-hotmart-list-low-ticket.component';
import { ListaLowTickerComponent } from '../lista-low-ticker/lista-low-ticker.component';
import { BusinessManagerListComponent } from '../business-manager-list/business-manager-list.component';
import { ContaNegocioFacebookListComponent } from '../conta-negocio-facebook-list/conta-negocio-facebook-list.component';
import { FrameworkPublicoInteresseListComponent } from '../framework-publico-interesse-list/framework-publico-interesse-list.component';
import { MetaAdsPublicoListComponent } from '../meta-ads-publico-list/meta-ads-publico-list.component';
import { MetaAdsCampanhaAfiliadoGenericoComponent } from '../meta-ads-campanha-afiliado-generico/meta-ads-campanha-afiliado-generico.component';
import { MetaAdsCampanhaAfiliadoHotmartComponent } from '../meta-ads-campanha-afiliado-hotmart/meta-ads-campanha-afiliado-hotmart.component';




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

    { path: 'videoVslPorProdutoList/:id' , component: VideoVslPorProdutoListComponent },
    { path: 'videoVslDetalhe/:id' , component: VideoVslDetalheComponent },
    { path: 'modeloPaginaVendaVslList' , component: ModeloPaginaVendaVslListComponent },
    { path: 'scriptGeraVideoList' , component: ScriptGeraVideoListComponent },

    { path: 'modeloPaginaVendaList' , component: PaginaVendaModeladaListComponent },
    { path: 'modeloPaginaVendaDetalhe/:id' , component: PaginaVendaModeladaDetalheComponent },
    { path: 'dalleSolicitacaoPorProdutoProprioList' , component: DalleSolicitacaoComImagemPorProprioListBaseComponent },

    { path: 'entregavelProdutoDetalhe/:id' , component: EntregavelProdutoDetalheComponent },
    { path: 'paginaVendaModeladaDetalhe/:id' , component: PaginaVendaModeladaDetalheComponent },

    { path: 'conteudoProdutoKiwifyDetalhe/:id' , component: ConteudoProdutoKiwifyDetalheComponent },
    { path: 'conteudoProdutoOrdenado/:idPrincipal/:ordenacao' , component: ConteudoProdutoKiwifyDetalheComponent},

    { path: 'estruturaPaginaVendaAbertaList' , component: EstruturaPaginaVendaAbertaListComponent },
    { path: 'estruturaPaginaVendaAbertaDetalhe/:id' , component: EstruturaPaginaVendaAbertaDetalheComponent },

    { path: 'paginaVendaAbertaDetalhe/:id' , component: PaginaVendaAbertaDetalheComponent },
    { path: 'itemEstruturaPaginaVendaDetalhe/:id' , component: ItemEstruturaPaginaVendaDetalheComponent },
    { path: 'metaAdsCampanhaDetalhe/:id' , component: MetaAdsCampanhaDetalheComponent },

    { path: 'contaInstagramList' , component: ContaInstagramListComponent },
    { path: 'contaFacebookList' , component: ContaFacebookListComponent },
    { path: 'contaWhatsappList' , component: ContaWhatsappListComponent },

    { path: 'whatsappGrupoDetalhe/:id' , component: WhatsappGrupoDetalheComponent },
    { path: 'whatsappGrupoPadraoMensagemDetalhe/:id' , component: WhatsappGrupoPadraoMensagemDetalheComponent },
    { path: 'whatsappGrupoPadraoMensagemTextoDetalhe/:id' , component: WhatsappGrupoPadraoMensagemTextoDetalheComponent },

    { path: 'metaAdsCampanhaMetricaListSimples', component: MetaAdsCampanhaMetricaListSimplesComponent},
    { path: 'metaAdsAnuncioMetricaListSimples', component: MetaAdsAnuncioMetricaListSimplesComponent},

    { path: 'metaAdsConjuntoAnuncioDetalhe/:id' , component: MetaAdsConjuntoAnuncioDetalheComponent },

    { path: 'paginaWhatsappExemploList' , component: PaginaWhatsappExemploListComponent },
    { path: 'entregavelProdutoListGeraImagemConteudo', component: EntregavelProdutoListGeraImagemConteudoComponent},
    { path: 'conteudoProdutoKiwifyListGerarImagem' , component: ConteudoProdutoKiwifyListGerarImagemComponent },

    { path: 'promptItemListCriaItemConteudo' , component: PromptItemListCriaItemConteudoComponent },

    { path: 'whatsappGrupoListQtde' , component: WhatsappGrupoListQtdeComponent },
    { path: 'imagemConjuntoListProcessoJava' , component: ImagemConjuntoListProcessoJavaComponent },
    { path: 'entregavelProdutoListParaGerarLista' , component: EntregavelProdutoListParaGerarListaComponent },
    { path: 'palavraChaveRaizList' , component: PalavraChaveRaizListComponent },

    { path: 'palavraChaveRaizDetalhe/:id' , component: PalavraChaveRaizDetalheComponent },
    { path: 'palavraChaveEstatisticaListMelhores' , component: PalavraChaveEstatisticaListMelhoresComponent },
    { path: 'palavraChaveEstatisticaListCrescimento' , component: PalavraChaveEstatisticaListCrescimentoComponent },

    { path: 'playerList' , component: PlayerListComponent},
    { path: 'ferramentaIa' , component: FerramentaIaListComponent },

    { path: 'plataformaVenda' , component: PlataformaVendaListComponent },
    { path: 'produtoAfiliadoGenerico' , component: ProdutoAfiliadoGenericoListComponent },


    { path: 'produtoAfiliadoHotmartListLowTicket', component: ProdutoAfiliadoHotmartListLowTicketComponent },
    { path: 'listaLowTicket' , component: ListaLowTickerComponent },

    { path: 'businessManager' , component: BusinessManagerListComponent },
    { path: 'contaNegocioFacebook' , component: ContaNegocioFacebookListComponent },

    { path: 'frameworkPublicoInteresse/:id' , component:FrameworkPublicoInteresseListComponent },
    { path: 'metaAdsPublico/:id' , component:MetaAdsPublicoListComponent },

    { path: 'metaAdsCampanhaAfiliadoHotmart/:id' , component: MetaAdsCampanhaAfiliadoHotmartComponent},
    { path: 'metaAdsCampanhaAfiliadoGenerico/:id' , component: MetaAdsCampanhaAfiliadoGenericoComponent },

    { path: '',  component: HomeComponent  }
    //{ path: '',          redirectTo: 'home', pathMatch: 'full' }
]  