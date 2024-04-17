/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';

import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { PlataformaVendaApi } from './services/custom/PlataformaVenda';
import { ProdutoPlataformaApi } from './services/custom/ProdutoPlataforma';
import { VisitaProdutoPlataformaApi } from './services/custom/VisitaProdutoPlataforma';
import { ProdutoHotmartApi } from './services/custom/ProdutoHotmart';
import { VisitaProdutoHotmartApi } from './services/custom/VisitaProdutoHotmart';
import { TokenAcessoApi } from './services/custom/TokenAcesso';
import { IdeiaPalavraChaveApi } from './services/custom/IdeiaPalavraChave';
import { CampanhaAdsApi } from './services/custom/CampanhaAds';
import { AnuncioCampanhaAdsApi } from './services/custom/AnuncioCampanhaAds';
import { PalavraCampanhaAdsApi } from './services/custom/PalavraCampanhaAds';
import { ProdutoAfiliadoHotmartApi } from './services/custom/ProdutoAfiliadoHotmart';
import { AgendaVisitaHotmartApi } from './services/custom/AgendaVisitaHotmart';
import { CampanhaAdsTesteApi } from './services/custom/CampanhaAdsTeste';
import { AnuncioAdsApi } from './services/custom/AnuncioAds';
import { ModeloCampanhaAdsTesteApi } from './services/custom/ModeloCampanhaAdsTeste';
import { PixelGoogleApi } from './services/custom/PixelGoogle';
import { PalavraChaveCampanhaAdsTesteApi } from './services/custom/PalavraChaveCampanhaAdsTeste';
import { AnuncioCampanhaAdsTesteApi } from './services/custom/AnuncioCampanhaAdsTeste';
import { ProdutoAfiliadoMetricaApi } from './services/custom/ProdutoAfiliadoMetrica';
import { ContaGoogleApi } from './services/custom/ContaGoogle';
import { CampanhaAdsMetricaApi } from './services/custom/CampanhaAdsMetrica';
import { LoadPaginaVendaApi } from './services/custom/LoadPaginaVenda';
import { SolicitacaoCheckoutApi } from './services/custom/SolicitacaoCheckout';
import { PlanoProdutoApi } from './services/custom/PlanoProduto';
import { ContaGoogleMetricaMesApi } from './services/custom/ContaGoogleMetricaMes';
import { LinkCheckoutApi } from './services/custom/LinkCheckout';
import { CampanhaAdsMetricaIntradayApi } from './services/custom/CampanhaAdsMetricaIntraday';
import { PrecoProdutoAfiliadoApi } from './services/custom/PrecoProdutoAfiliado';
import { AnuncioAdsDisplayApi } from './services/custom/AnuncioAdsDisplay';
import { VisitanteApi } from './services/custom/Visitante';
import { VideoExecucaoApi } from './services/custom/VideoExecucao';
import { ProdutoAfiliadoHotlinkApi } from './services/custom/ProdutoAfiliadoHotlink';
import { TagIdSecaoPaginaVendaApi } from './services/custom/TagIdSecaoPaginaVenda';
import { CampanhaAdsRedeDisplayApi } from './services/custom/CampanhaAdsRedeDisplay';
import { OtimizacaoCampanhaAdsRedeDisplayApi } from './services/custom/OtimizacaoCampanhaAdsRedeDisplay';
import { ListaRemarketingAdsApi } from './services/custom/ListaRemarketingAds';
import { PublicoAlvoAdsApi } from './services/custom/PublicoAlvoAds';
import { PublicoAlvoAdsDiarioApi } from './services/custom/PublicoAlvoAdsDiario';
import { PaginaVendaApi } from './services/custom/PaginaVenda';
import { AnuncioCampanhaAdsDisplayApi } from './services/custom/AnuncioCampanhaAdsDisplay';
import { ImagemConjuntoApi } from './services/custom/ImagemConjunto';
import { ProdutoAfiliadoHotmartPendenteApi } from './services/custom/ProdutoAfiliadoHotmartPendente';
import { SegmentoMercadoAdsPersonalizadoApi } from './services/custom/SegmentoMercadoAdsPersonalizado';
import { PaginaVendaSecaoApi } from './services/custom/PaginaVendaSecao';
import { SecaoWebApi } from './services/custom/SecaoWeb';
import { ProdutoProprioApi } from './services/custom/ProdutoProprio';
import { ProdutoProprioVersaoApi } from './services/custom/ProdutoProprioVersao';
import { ProdutoProprioItemNivel1Api } from './services/custom/ProdutoProprioItemNivel1';
import { PaginaVendaScrollApi } from './services/custom/PaginaVendaScroll';
import { EvolucaoExperimentoApi } from './services/custom/EvolucaoExperimento';
import { CampanhaAdsExperimentoApi } from './services/custom/CampanhaAdsExperimento';
import { ExperimentoModeloApi } from './services/custom/ExperimentoModelo';
import { ModeloPaginaVendaApi } from './services/custom/ModeloPaginaVenda';
import { PosicaoElementoPaginaVendaApi } from './services/custom/PosicaoElementoPaginaVenda';
import { ElementoModeloPaginaVendaApi } from './services/custom/ElementoModeloPaginaVenda';
import { VersaoPaginaVendaApi } from './services/custom/VersaoPaginaVenda';
import { ConteudoElementoApi } from './services/custom/ConteudoElemento';
import { DalleSolicitacaoImagemApi } from './services/custom/DalleSolicitacaoImagem';
import { ArquivoPaginaVendaApi } from './services/custom/ArquivoPaginaVenda';
import { ImagemPaginaVendaApi } from './services/custom/ImagemPaginaVenda';
import { ProdutoAfiliadoClickbankApi } from './services/custom/ProdutoAfiliadoClickbank';
import { VersaoImagemPaginaVendaApi } from './services/custom/VersaoImagemPaginaVenda';
import { PixelAdsSegmentoMercadoApi } from './services/custom/PixelAdsSegmentoMercado';
import { PaginaVendaPropriaApi } from './services/custom/PaginaVendaPropria';
import { LoadPaginaVendaPropriaApi } from './services/custom/LoadPaginaVendaPropria';
import { ScrollPaginaVendaPropriaApi } from './services/custom/ScrollPaginaVendaPropria';
import { AnuncioCampanhaAdsRedeDisplayApi } from './services/custom/AnuncioCampanhaAdsRedeDisplay';
import { GrupoCampanhaAdsRedeDisplayApi } from './services/custom/GrupoCampanhaAdsRedeDisplay';
import { SolicitacaoCheckoutPaginaVendaPropriaApi } from './services/custom/SolicitacaoCheckoutPaginaVendaPropria';
import { ContaPublicoAlvoAdsPalavraApi } from './services/custom/ContaPublicoAlvoAdsPalavra';
import { PublicoAlvoAdsPalavraApi } from './services/custom/PublicoAlvoAdsPalavra';
import { ProdutoPublicoAdsPalavraApi } from './services/custom/ProdutoPublicoAdsPalavra';
import { PixelProdutoHotmartContaApi } from './services/custom/PixelProdutoHotmartConta';
import { PixelProdutoHotmartContaCheckoutApi } from './services/custom/PixelProdutoHotmartContaCheckout';
import { PixelProdutoHotmartContaCompraApi } from './services/custom/PixelProdutoHotmartContaCompra';
import { ArtigoParaProdutoApi } from './services/custom/ArtigoParaProduto';
import { ProdutoHotmartContaApi } from './services/custom/ProdutoHotmartConta';
import { AnuncioConceitoAdsRedeDisplayApi } from './services/custom/AnuncioConceitoAdsRedeDisplay';
import { MetricaCampanhaAdsRedeDisplayApi } from './services/custom/MetricaCampanhaAdsRedeDisplay';
import { VideoVslApi } from './services/custom/VideoVsl';
import { PaginaVendaVslApi } from './services/custom/PaginaVendaVsl';
import { TrechoVslApi } from './services/custom/TrechoVsl';
import { ModeloPaginaVendaVslApi } from './services/custom/ModeloPaginaVendaVsl';
import { ScriptGeraVideoApi } from './services/custom/ScriptGeraVideo';
import { WhatsappGrupoApi } from './services/custom/WhatsappGrupo';
import { WhatsappMensagemApi } from './services/custom/WhatsappMensagem';
import { AgendaCampanhaApi } from './services/custom/AgendaCampanha';
import { ConteudoProdutoKiwifyApi } from './services/custom/ConteudoProdutoKiwify';
import { TentativaOfertaApi } from './services/custom/TentativaOferta';
import { PaginaVendaAbertaApi } from './services/custom/PaginaVendaAberta';
import { PaginaVendaModeladaApi } from './services/custom/PaginaVendaModelada';
import { SecaoPaginaVendaModeladaApi } from './services/custom/SecaoPaginaVendaModelada';
import { TipoSecaoPaginaVendaApi } from './services/custom/TipoSecaoPaginaVenda';
import { EntregavelProdutoApi } from './services/custom/EntregavelProduto';
import { RecursoIAApi } from './services/custom/RecursoIA';
import { AnuncioFacebookApi } from './services/custom/AnuncioFacebook';
import { ContaInstagramApi } from './services/custom/ContaInstagram';
import { ContaFacebookApi } from './services/custom/ContaFacebook';
import { PaginaFacebookApi } from './services/custom/PaginaFacebook';
import { PromptItemApi } from './services/custom/PromptItem';
import { PromptImagemConteudoApi } from './services/custom/PromptImagemConteudo';
import { ImagemConteudoApi } from './services/custom/ImagemConteudo';
import { ItemConteudoProdutoApi } from './services/custom/ItemConteudoProduto';
import { IdeiaUnicaApi } from './services/custom/IdeiaUnica';
import { EstruturaPaginaVendaAbertaApi } from './services/custom/EstruturaPaginaVendaAberta';
import { PaginaImplementacaoApi } from './services/custom/PaginaImplementacao';
import { ItemEstruturaPaginaVendaApi } from './services/custom/ItemEstruturaPaginaVenda';
import { ImplementacaoItemEstruturaApi } from './services/custom/ImplementacaoItemEstrutura';
import { CheckoutProdutoProprioApi } from './services/custom/CheckoutProdutoProprio';
import { MetaAdsCampanhaApi } from './services/custom/MetaAdsCampanha';
import { MetaAdsConjuntoAnuncioApi } from './services/custom/MetaAdsConjuntoAnuncio';
import { MetaAdsAnuncioApi } from './services/custom/MetaAdsAnuncio';
import { CriativoAnuncioApi } from './services/custom/CriativoAnuncio';
import { FonteLocalApi } from './services/custom/FonteLocal';
import { MetaAdsPixelVendaApi } from './services/custom/MetaAdsPixelVenda';
import { ConteudoEntregavelApi } from './services/custom/ConteudoEntregavel';
import { ContaWhatsappApi } from './services/custom/ContaWhatsapp';
import { WhatsappGrupoPadraoMensagemApi } from './services/custom/WhatsappGrupoPadraoMensagem';
import { WhatsappGrupoDiaAgendaApi } from './services/custom/WhatsappGrupoDiaAgenda';
import { WhatsappModeloMensagemApi } from './services/custom/WhatsappModeloMensagem';
import { WhatsappMensagemTextoApi } from './services/custom/WhatsappMensagemTexto';
import { MetaAdsCampanhaMetricaApi } from './services/custom/MetaAdsCampanhaMetrica';
import { MetaAdsConjuntoAnuncioMetricaApi } from './services/custom/MetaAdsConjuntoAnuncioMetrica';
import { MetaAdsAnuncioMetricaApi } from './services/custom/MetaAdsAnuncioMetrica';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        SDKModels,
        RealTime,
        UserApi,
        PlataformaVendaApi,
        ProdutoPlataformaApi,
        VisitaProdutoPlataformaApi,
        ProdutoHotmartApi,
        VisitaProdutoHotmartApi,
        TokenAcessoApi,
        IdeiaPalavraChaveApi,
        CampanhaAdsApi,
        AnuncioCampanhaAdsApi,
        PalavraCampanhaAdsApi,
        ProdutoAfiliadoHotmartApi,
        AgendaVisitaHotmartApi,
        CampanhaAdsTesteApi,
        AnuncioAdsApi,
        ModeloCampanhaAdsTesteApi,
        PixelGoogleApi,
        PalavraChaveCampanhaAdsTesteApi,
        AnuncioCampanhaAdsTesteApi,
        ProdutoAfiliadoMetricaApi,
        ContaGoogleApi,
        CampanhaAdsMetricaApi,
        LoadPaginaVendaApi,
        SolicitacaoCheckoutApi,
        PlanoProdutoApi,
        ContaGoogleMetricaMesApi,
        LinkCheckoutApi,
        CampanhaAdsMetricaIntradayApi,
        PrecoProdutoAfiliadoApi,
        AnuncioAdsDisplayApi,
        VisitanteApi,
        VideoExecucaoApi,
        ProdutoAfiliadoHotlinkApi,
        TagIdSecaoPaginaVendaApi,
        CampanhaAdsRedeDisplayApi,
        OtimizacaoCampanhaAdsRedeDisplayApi,
        ListaRemarketingAdsApi,
        PublicoAlvoAdsApi,
        PublicoAlvoAdsDiarioApi,
        PaginaVendaApi,
        AnuncioCampanhaAdsDisplayApi,
        ImagemConjuntoApi,
        ProdutoAfiliadoHotmartPendenteApi,
        SegmentoMercadoAdsPersonalizadoApi,
        PaginaVendaSecaoApi,
        SecaoWebApi,
        ProdutoProprioApi,
        ProdutoProprioVersaoApi,
        ProdutoProprioItemNivel1Api,
        PaginaVendaScrollApi,
        EvolucaoExperimentoApi,
        CampanhaAdsExperimentoApi,
        ExperimentoModeloApi,
        ModeloPaginaVendaApi,
        PosicaoElementoPaginaVendaApi,
        ElementoModeloPaginaVendaApi,
        VersaoPaginaVendaApi,
        ConteudoElementoApi,
        DalleSolicitacaoImagemApi,
        ArquivoPaginaVendaApi,
        ImagemPaginaVendaApi,
        ProdutoAfiliadoClickbankApi,
        VersaoImagemPaginaVendaApi,
        PixelAdsSegmentoMercadoApi,
        PaginaVendaPropriaApi,
        LoadPaginaVendaPropriaApi,
        ScrollPaginaVendaPropriaApi,
        AnuncioCampanhaAdsRedeDisplayApi,
        GrupoCampanhaAdsRedeDisplayApi,
        SolicitacaoCheckoutPaginaVendaPropriaApi,
        ContaPublicoAlvoAdsPalavraApi,
        PublicoAlvoAdsPalavraApi,
        ProdutoPublicoAdsPalavraApi,
        PixelProdutoHotmartContaApi,
        PixelProdutoHotmartContaCheckoutApi,
        PixelProdutoHotmartContaCompraApi,
        ArtigoParaProdutoApi,
        ProdutoHotmartContaApi,
        AnuncioConceitoAdsRedeDisplayApi,
        MetricaCampanhaAdsRedeDisplayApi,
        VideoVslApi,
        PaginaVendaVslApi,
        TrechoVslApi,
        ModeloPaginaVendaVslApi,
        ScriptGeraVideoApi,
        WhatsappGrupoApi,
        WhatsappMensagemApi,
        AgendaCampanhaApi,
        ConteudoProdutoKiwifyApi,
        TentativaOfertaApi,
        PaginaVendaAbertaApi,
        PaginaVendaModeladaApi,
        SecaoPaginaVendaModeladaApi,
        TipoSecaoPaginaVendaApi,
        EntregavelProdutoApi,
        RecursoIAApi,
        AnuncioFacebookApi,
        ContaInstagramApi,
        ContaFacebookApi,
        PaginaFacebookApi,
        PromptItemApi,
        PromptImagemConteudoApi,
        ImagemConteudoApi,
        ItemConteudoProdutoApi,
        IdeiaUnicaApi,
        EstruturaPaginaVendaAbertaApi,
        PaginaImplementacaoApi,
        ItemEstruturaPaginaVendaApi,
        ImplementacaoItemEstruturaApi,
        CheckoutProdutoProprioApi,
        MetaAdsCampanhaApi,
        MetaAdsConjuntoAnuncioApi,
        MetaAdsAnuncioApi,
        CriativoAnuncioApi,
        FonteLocalApi,
        MetaAdsPixelVendaApi,
        ConteudoEntregavelApi,
        ContaWhatsappApi,
        WhatsappGrupoPadraoMensagemApi,
        WhatsappGrupoDiaAgendaApi,
        WhatsappModeloMensagemApi,
        WhatsappMensagemTextoApi,
        MetaAdsCampanhaMetricaApi,
        MetaAdsConjuntoAnuncioMetricaApi,
        MetaAdsAnuncioMetricaApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

