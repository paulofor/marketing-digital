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
    ContaGoogleDetalheComponent
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
    ExibeTextoModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
