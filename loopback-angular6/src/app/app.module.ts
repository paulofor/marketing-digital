import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';


import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from './shared/sdk';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatCheckbox, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
//import { MatMomentDateModule } from "@angular/material-moment-adapter";
//import { NgxImgModule } from 'ngx-img';
import { FileDropModule } from 'ngx-file-drop';
//import { UploadModule } from './upload/upload.module';
import { ImageUploadModule } from "angular2-image-upload";
import { ReactiveFormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PlataformaListComponent } from './plataforma-list/plataforma-list.component';
import { PlataformaEditComponent } from './plataforma-edit/plataforma-edit.component';
import { ProdutoHotmartListComponent } from './produto-hotmart-list/produto-hotmart-list.component';
import { TokenAcessoListComponent } from './token-acesso-list/token-acesso-list.component';
import { TokenAcessoEditComponent } from './token-acesso-edit/token-acesso-edit.component';
import { IdeiaPalavraChaveListComponent } from './ideia-palavra-chave-list/ideia-palavra-chave-list.component';
import { ProdutoAfiliadoHotmartListComponent } from './produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component';
import { ProdutoAfiliadoHotmartEditComponent } from './produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component';
import { ProdutoAfiliadoHotmartDetalheComponent } from './produto-afiliado-hotmart-detalhe/produto-afiliado-hotmart-detalhe.component';
import { ModeloCampanhaAdsTesteListComponent } from './modelo-campanha-ads-teste-list/modelo-campanha-ads-teste-list.component';
import { ModeloCampanhaAdsTesteEditComponent } from './modelo-campanha-ads-teste-edit/modelo-campanha-ads-teste-edit.component';
import { CampanhaAdsTesteEditComponent } from './campanha-ads-teste-edit/campanha-ads-teste-edit.component';
import { AnuncioAdsListaComponent } from './anuncio-ads-lista/anuncio-ads-lista.component';
import { AnuncioAdsEditaComponent } from './anuncio-ads-edita/anuncio-ads-edita.component';
import { CampanhaAdsTesteListaComponent } from './campanha-ads-teste-lista/campanha-ads-teste-lista.component';
import { PixelGoogleListComponent } from './pixel-google-list/pixel-google-list.component';
import { PixelGoogleEditComponent } from './pixel-google-edit/pixel-google-edit.component';
import { CampanhaAdsTesteDetalheComponent } from './campanha-ads-teste-detalhe/campanha-ads-teste-detalhe.component';
import { EscolheAnuncioParaCampanhaTesteComponent } from './escolhe-anuncio-para-campanha-teste/escolhe-anuncio-para-campanha-teste.component';
import { EscolhePalavraChaveParaCampanhaTesteComponent } from './escolhe-palavra-chave-para-campanha-teste/escolhe-palavra-chave-para-campanha-teste.component';

import { ContaGoogleListComponent } from './conta-google-list/conta-google-list.component';
import { ContaGoogleEditComponent } from './conta-google-edit/conta-google-edit.component';
import { IdeiaPalavraChaveListSimplesMelhoresCpcComponent } from './ideia-palavra-chave-list-simples-melhores-cpc/ideia-palavra-chave-list-simples-melhores-cpc.component';
import { IdeiaPalavraChaveListSimplesTopComponent } from './ideia-palavra-chave-list-simples-top/ideia-palavra-chave-list-simples-top.component';
import { IdeiaPalavraChaveListSimplesTopPesquisaComponent } from './ideia-palavra-chave-list-simples-top-pesquisa/ideia-palavra-chave-list-simples-top-pesquisa.component';
import { CampanhaAdsTesteListAtivaMetricaComponent } from './campanha-ads-teste-list-ativa-metrica/campanha-ads-teste-list-ativa-metrica.component';
import { VisitaProdutoHotmartResumoComponent } from './visita-produto-hotmart-resumo/visita-produto-hotmart-resumo.component';
import { ProdutosTopVendasComponent } from './produtos-top-vendas/produtos-top-vendas.component';
import { ProdutoAfiliadoTrabalhoComponent } from './produto-afiliado-trabalho/produto-afiliado-trabalho.component';
import { ProdutosBoaOpcaoIntermediariaComponent } from './produtos-boa-opcao-intermediaria/produtos-boa-opcao-intermediaria.component';
import { LoadPaginaVendaListSimplesComponent } from './load-pagina-venda-list-simples/load-pagina-venda-list-simples.component';
import { SolicitacaoCheckoutListSimplesComponent } from './solicitacao-checkout-list-simples/solicitacao-checkout-list-simples.component';
import { CampanhaAdsMetricaListSimplesComponent } from './campanha-ads-metrica-list-simples/campanha-ads-metrica-list-simples.component';
import { ListaEstiloFanartComponent } from './lista-estilo-fanart/lista-estilo-fanart.component';
import { LinkCheckoutEditComponent } from './link-checkout-edit/link-checkout-edit.component';
import { ProdutoPendenteEstruturaComponent } from './produto-pendente-estrutura/produto-pendente-estrutura.component';
import { ProdutoObtemProximoTrabalhoComponent } from './produto-obtem-proximo-trabalho/produto-obtem-proximo-trabalho.component';
import { ListaBomCrescimentoTemperaturaComponent } from './lista-bom-crescimento-temperatura/lista-bom-crescimento-temperatura.component';
import { CampanhaAdsMetricaIntradayListSimplesComponent } from './campanha-ads-metrica-intraday-list-simples/campanha-ads-metrica-intraday-list-simples.component';
import { HistoricoPorCodigoAdsComponent } from './historico-por-codigo-ads/historico-por-codigo-ads.component';
import { PrecoProdutoAfiliadoEditComponent } from './preco-produto-afiliado-edit/preco-produto-afiliado-edit.component';
import { AnuncioAdsDisplayEditComponent } from './anuncio-ads-display-edit/anuncio-ads-display-edit.component';
import { AnuncioAdsDisplayPorProdutoListComponent } from './anuncio-ads-display-por-produto-list/anuncio-ads-display-por-produto-list.component';
import { ListaAltaMargemAltaTemperaturaComponent } from './lista-alta-margem-alta-temperatura/lista-alta-margem-alta-temperatura.component';
import { ListaSuperMargemComponent } from './lista-super-margem/lista-super-margem.component';
import { ExibeTextoModalComponent } from './exibe-texto-modal/exibe-texto-modal.component';
import { ContaGoogleDetalheComponent } from './conta-google-detalhe/conta-google-detalhe.component';
import { PaginaVendaEditComponent } from './pagina-venda-edit/pagina-venda-edit.component';
import { SecaoWebEditComponent } from './secao-web-edit/secao-web-edit.component';
import { SecaoWebPorProdutoListComponent } from './secao-web-por-produto-list/secao-web-por-produto-list.component';
import { ExperimentoModeloListComponent } from './experimento-modelo-list/experimento-modelo-list.component';
import { ExperimentoModeloEditComponent } from './experimento-modelo-edit/experimento-modelo-edit.component';
import { ExperimentoModeloDetalheComponent } from './experimento-modelo-detalhe/experimento-modelo-detalhe.component';
import { EvolucaoExperimentoEditComponent } from './evolucao-experimento-edit/evolucao-experimento-edit.component';
import { CampanhaAdsExperimentoEditComponent } from './campanha-ads-experimento-edit/campanha-ads-experimento-edit.component';
import { ModeloPaginaVendaListComponent } from './modelo-pagina-venda-list/modelo-pagina-venda-list.component';
import { ModeloPaginaVendaEditComponent } from './modelo-pagina-venda-edit/modelo-pagina-venda-edit.component';
import { ModeloPaginaVendaDetalheComponent } from './modelo-pagina-venda-detalhe/modelo-pagina-venda-detalhe.component';
import { DalleSolicitacaoImagemEditComponent } from './dalle-solicitacao-imagem-edit/dalle-solicitacao-imagem-edit.component';
import { ElementoModeloPaginaVendaListComponent } from './elemento-modelo-pagina-venda-list/elemento-modelo-pagina-venda-list.component';
import { ElementoModeloPaginaVendaEditComponent } from './elemento-modelo-pagina-venda-edit/elemento-modelo-pagina-venda-edit.component';
import { PosicaoElementoPaginaVendaEditRelComponent } from './posicao-elemento-pagina-venda-edit-rel/posicao-elemento-pagina-venda-edit-rel.component';
import { PosicaoElementoPaginaVendaEditComponent } from './posicao-elemento-pagina-venda-edit/posicao-elemento-pagina-venda-edit.component';
import { VersaoPaginaVendaEditComponent } from './versao-pagina-venda-edit/versao-pagina-venda-edit.component';
import { VersaoPaginaVendaDetalheComponent } from './versao-pagina-venda-detalhe/versao-pagina-venda-detalhe.component';
import { ConteudoElementoEditComponent } from './conteudo-elemento-edit/conteudo-elemento-edit.component';
import { ModeloPaginaVendaFonteEditComponent } from './modelo-pagina-venda-fonte-edit/modelo-pagina-venda-fonte-edit.component';
import { VersaoImagemPaginaVendaEditRelComponent } from './versao-imagem-pagina-venda-edit-rel/versao-imagem-pagina-venda-edit-rel.component';
import { DalleSolicitacaoImagemPorProdutoListComponent } from './dalle-solicitacao-imagem-por-produto-list/dalle-solicitacao-imagem-por-produto-list.component';
import { DalleSolicitacaoComImagemPorProdutoListComponent } from './dalle-solicitacao-com-imagem-por-produto-list/dalle-solicitacao-com-imagem-por-produto-list.component';
import { ArquivoPaginaVendaEditRelComponent } from './arquivo-pagina-venda-edit-rel/arquivo-pagina-venda-edit-rel.component';
import { CampanhaAdsMetricaIntradayPorCampanhaListComponent } from './campanha-ads-metrica-intraday-por-campanha-list/campanha-ads-metrica-intraday-por-campanha-list.component';
import { CampanhaAdsMetricaIntradayCtrListComponent } from './campanha-ads-metrica-intraday-ctr-list/campanha-ads-metrica-intraday-ctr-list.component';
import { ExibeTextoSemPreComponent } from './exibe-texto-sem-pre/exibe-texto-sem-pre.component';
import { PaginaVendaPropriaPorProdutoListComponent } from './pagina-venda-propria-por-produto-list/pagina-venda-propria-por-produto-list.component';
import { PaginaVendaPropriaEditComponent } from './pagina-venda-propria-edit/pagina-venda-propria-edit.component';
import { PaginaVendaPropriaDetalheComponent } from './pagina-venda-propria-detalhe/pagina-venda-propria-detalhe.component';
import { PublicoAlvoAdsPalavraListComponent } from './publico-alvo-ads-palavra-list/publico-alvo-ads-palavra-list.component';
import { PublicoAlvoAdsPalavraEditComponent } from './publico-alvo-ads-palavra-edit/publico-alvo-ads-palavra-edit.component';
import { PublicoAlvoAdsPalavraDetalheComponent } from './publico-alvo-ads-palavra-detalhe/publico-alvo-ads-palavra-detalhe.component';
import { ContaPublicoAlvoAdsPalavraEditRelComponent } from './conta-publico-alvo-ads-palavra-edit-rel/conta-publico-alvo-ads-palavra-edit-rel.component';
import { ProdutoHotmartContaEditRelComponent } from './produto-hotmart-conta-edit-rel/produto-hotmart-conta-edit-rel.component';
import { IdeiaPalavraChaveEditComponent } from './ideia-palavra-chave-edit/ideia-palavra-chave-edit.component';
import { ProdutoProprioListComponent } from './produto-proprio-list/produto-proprio-list.component';
import { ProdutoProprioEditComponent } from './produto-proprio-edit/produto-proprio-edit.component';
import { ProdutoProprioDetalheComponent } from './produto-proprio-detalhe/produto-proprio-detalhe.component';
import { ProdutoProprioVersaoDetalheComponent } from './produto-proprio-versao-detalhe/produto-proprio-versao-detalhe.component';
import { AnuncioConceitoAdsRedeDisplayComponent } from './anuncio-conceito-ads-rede-display/anuncio-conceito-ads-rede-display.component';
import { AnuncioConceitoAdsRedeDisplayPorProdutoListComponent } from './anuncio-conceito-ads-rede-display-por-produto-list/anuncio-conceito-ads-rede-display-por-produto-list.component';
import { ImagemConjuntoPorProdutoListComponent } from './imagem-conjunto-por-produto-list/imagem-conjunto-por-produto-list.component';
import { ImagemConjuntoEditComponent } from './imagem-conjunto-edit/imagem-conjunto-edit.component';
import { AnuncioConceitoAdsRedeDisplayEditComponent } from './anuncio-conceito-ads-rede-display-edit/anuncio-conceito-ads-rede-display-edit.component';
import { CampanhaAdsRedeDisplayPorProdutoListComponent } from './campanha-ads-rede-display-por-produto-list/campanha-ads-rede-display-por-produto-list.component';
import { CampanhaAdsRedeDisplayEditComponent } from './campanha-ads-rede-display-edit/campanha-ads-rede-display-edit.component';
import { ModeloPaginaVendaDetalheComCampanhasComponent } from './modelo-pagina-venda-detalhe-com-campanhas/modelo-pagina-venda-detalhe-com-campanhas.component';
import { VideoVslPorProdutoListComponent } from './video-vsl-por-produto-list/video-vsl-por-produto-list.component';
import { VideoVslEditComponent } from './video-vsl-edit/video-vsl-edit.component';
import { TrechoVslEditComponent } from './trecho-vsl-edit/trecho-vsl-edit.component';
import { TrechoVslListComponent } from './trecho-vsl-list/trecho-vsl-list.component';
import { VideoVslDetalheComponent } from './video-vsl-detalhe/video-vsl-detalhe.component';
import { ImagemConjuntoProdutoProprioListComponent } from './imagem-conjunto-produto-proprio-list/imagem-conjunto-produto-proprio-list.component';
import { ModeloPaginaVendaVslListComponent } from './modelo-pagina-venda-vsl-list/modelo-pagina-venda-vsl-list.component';
import { ModeloPaginaVendaVslEditComponent } from './modelo-pagina-venda-vsl-edit/modelo-pagina-venda-vsl-edit.component';
import { PaginaVendaVslPorProdutoListComponent } from './pagina-venda-vsl-por-produto-list/pagina-venda-vsl-por-produto-list.component';
import { PaginaVendaVslEditComponent } from './pagina-venda-vsl-edit/pagina-venda-vsl-edit.component';
import { AnuncioConceitoAdsRedeDisplayProdutoProprioListComponent } from './anuncio-conceito-ads-rede-display-produto-proprio-list/anuncio-conceito-ads-rede-display-produto-proprio-list.component';
import { CampanhaAdsRedeDisplayProdutoProprioListComponent } from './campanha-ads-rede-display-produto-proprio-list/campanha-ads-rede-display-produto-proprio-list.component';
import { CampanhaAdsRedeDisplayProdutoProprioEditComponent } from './campanha-ads-rede-display-produto-proprio-edit/campanha-ads-rede-display-produto-proprio-edit.component';
import { PublicoAlvoAdsPalavraProdutoProprioListComponent } from './publico-alvo-ads-palavra-produto-proprio-list/publico-alvo-ads-palavra-produto-proprio-list.component';



//import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    PlataformaListComponent,
    PlataformaEditComponent,
    ProdutoHotmartListComponent,
    TokenAcessoListComponent,
    TokenAcessoEditComponent,
    IdeiaPalavraChaveListComponent,
    ProdutoAfiliadoHotmartListComponent,
    ProdutoAfiliadoHotmartEditComponent,
    ProdutoAfiliadoHotmartDetalheComponent,
    ModeloCampanhaAdsTesteListComponent,
    ModeloCampanhaAdsTesteEditComponent,
    CampanhaAdsTesteEditComponent,
    AnuncioAdsListaComponent,
    AnuncioAdsEditaComponent,
    CampanhaAdsTesteListaComponent,
    PixelGoogleListComponent,
    PixelGoogleEditComponent,
    CampanhaAdsTesteDetalheComponent,
    EscolheAnuncioParaCampanhaTesteComponent,
    EscolhePalavraChaveParaCampanhaTesteComponent,
    ContaGoogleListComponent,
    ContaGoogleEditComponent,
    IdeiaPalavraChaveListSimplesMelhoresCpcComponent,
    IdeiaPalavraChaveListSimplesTopComponent,
    IdeiaPalavraChaveListSimplesTopPesquisaComponent,
    CampanhaAdsTesteListAtivaMetricaComponent,
    VisitaProdutoHotmartResumoComponent,
    ProdutosTopVendasComponent,
    ProdutoAfiliadoTrabalhoComponent,
    ProdutosBoaOpcaoIntermediariaComponent,
    LoadPaginaVendaListSimplesComponent,
    SolicitacaoCheckoutListSimplesComponent,
    CampanhaAdsMetricaListSimplesComponent,
    ListaEstiloFanartComponent,
    LinkCheckoutEditComponent,
    ProdutoPendenteEstruturaComponent,
    ProdutoObtemProximoTrabalhoComponent,
    ListaBomCrescimentoTemperaturaComponent,
    CampanhaAdsMetricaIntradayListSimplesComponent,
    HistoricoPorCodigoAdsComponent,
    PrecoProdutoAfiliadoEditComponent,
    AnuncioAdsDisplayEditComponent,
    AnuncioAdsDisplayPorProdutoListComponent,
    ListaAltaMargemAltaTemperaturaComponent,
    ListaSuperMargemComponent,
    ExibeTextoModalComponent,
    ContaGoogleDetalheComponent,
    PaginaVendaEditComponent,
    SecaoWebEditComponent,
    SecaoWebPorProdutoListComponent,
    ExperimentoModeloListComponent,
    ExperimentoModeloEditComponent,
    ExperimentoModeloDetalheComponent,
    EvolucaoExperimentoEditComponent,
    CampanhaAdsExperimentoEditComponent,
    ModeloPaginaVendaListComponent,
    ModeloPaginaVendaEditComponent,
    ModeloPaginaVendaDetalheComponent,
    DalleSolicitacaoImagemEditComponent,
    ElementoModeloPaginaVendaListComponent,
    ElementoModeloPaginaVendaEditComponent,
    PosicaoElementoPaginaVendaEditRelComponent,
    PosicaoElementoPaginaVendaEditComponent,
    VersaoPaginaVendaEditComponent,
    VersaoPaginaVendaDetalheComponent,
    ConteudoElementoEditComponent,
    ModeloPaginaVendaFonteEditComponent,
    VersaoImagemPaginaVendaEditRelComponent,
    DalleSolicitacaoImagemPorProdutoListComponent,
    DalleSolicitacaoComImagemPorProdutoListComponent,
    ArquivoPaginaVendaEditRelComponent,
    CampanhaAdsMetricaIntradayPorCampanhaListComponent,
    CampanhaAdsMetricaIntradayCtrListComponent,
    ExibeTextoSemPreComponent,
    PaginaVendaPropriaPorProdutoListComponent,
    PaginaVendaPropriaEditComponent,
    PaginaVendaPropriaDetalheComponent,
    PublicoAlvoAdsPalavraListComponent,
    PublicoAlvoAdsPalavraEditComponent,
    PublicoAlvoAdsPalavraDetalheComponent,
    ContaPublicoAlvoAdsPalavraEditRelComponent,
    ProdutoHotmartContaEditRelComponent,
    IdeiaPalavraChaveEditComponent,
    ProdutoProprioListComponent,
    ProdutoProprioEditComponent,
    ProdutoProprioDetalheComponent,
    ProdutoProprioVersaoDetalheComponent,
    AnuncioConceitoAdsRedeDisplayComponent,
    AnuncioConceitoAdsRedeDisplayPorProdutoListComponent,
    ImagemConjuntoPorProdutoListComponent,
    ImagemConjuntoEditComponent,
    AnuncioConceitoAdsRedeDisplayEditComponent,
    CampanhaAdsRedeDisplayPorProdutoListComponent,
    CampanhaAdsRedeDisplayEditComponent,
    ModeloPaginaVendaDetalheComCampanhasComponent,
    VideoVslPorProdutoListComponent,
    TrechoVslEditComponent,
    TrechoVslListComponent,
    VideoVslEditComponent,
    VideoVslDetalheComponent,
    ImagemConjuntoProdutoProprioListComponent,
    ModeloPaginaVendaVslListComponent,
    ModeloPaginaVendaVslEditComponent,
    PaginaVendaVslPorProdutoListComponent,
    PaginaVendaVslEditComponent,
    AnuncioConceitoAdsRedeDisplayProdutoProprioListComponent,
    CampanhaAdsRedeDisplayProdutoProprioListComponent,
    CampanhaAdsRedeDisplayProdutoProprioEditComponent,
    PublicoAlvoAdsPalavraProdutoProprioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    //NgxImgModule.forRoot(),
    FileDropModule,
    //UploadModule,
    ImageUploadModule.forRoot(),
    NgDragDropModule.forRoot(),
    SDKBrowserModule.forRoot(),
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgApexchartsModule
    //MatMomentDateModule
  ],
  providers: [
    HttpClient, 
    SocketConnection  , 
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    MatNativeDateModule,
    //MatMomentDateModule,
    { provide: LOCALE_ID, useValue: 'pt-BR' } ,
    //{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  entryComponents : [
    TokenAcessoEditComponent,
    ProdutoAfiliadoHotmartEditComponent,
    ModeloCampanhaAdsTesteEditComponent,
    AnuncioAdsEditaComponent,
    CampanhaAdsTesteEditComponent,
    PixelGoogleEditComponent,
    EscolheAnuncioParaCampanhaTesteComponent,
    EscolhePalavraChaveParaCampanhaTesteComponent,
    ContaGoogleEditComponent,
    PrecoProdutoAfiliadoEditComponent,
    ExibeTextoModalComponent,
    PaginaVendaEditComponent,
    SecaoWebEditComponent,
    ExperimentoModeloEditComponent,
    CampanhaAdsExperimentoEditComponent,
    EvolucaoExperimentoEditComponent,
    ModeloPaginaVendaEditComponent,
    ElementoModeloPaginaVendaEditComponent,
    PosicaoElementoPaginaVendaEditRelComponent,
    PosicaoElementoPaginaVendaEditComponent,
    VersaoPaginaVendaEditComponent,
    ConteudoElementoEditComponent,
    ModeloPaginaVendaFonteEditComponent,
    DalleSolicitacaoImagemEditComponent,
    VersaoImagemPaginaVendaEditRelComponent,
    ArquivoPaginaVendaEditRelComponent,
    ExibeTextoSemPreComponent,
    PublicoAlvoAdsPalavraEditComponent,
    ContaPublicoAlvoAdsPalavraEditRelComponent,
    ProdutoHotmartContaEditRelComponent,
    IdeiaPalavraChaveEditComponent,
    ProdutoProprioEditComponent,
    ImagemConjuntoEditComponent,
    AnuncioConceitoAdsRedeDisplayEditComponent,
    CampanhaAdsRedeDisplayEditComponent,
    VideoVslEditComponent,
    TrechoVslEditComponent,
    ModeloPaginaVendaVslEditComponent,
    PaginaVendaVslEditComponent,
    CampanhaAdsRedeDisplayProdutoProprioEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
