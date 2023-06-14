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



export const routes : Routes = [
    { path: 'home' , component: HomeComponent },

    { path: 'plataforma' , component: PlataformaListComponent },
    { path: 'produtoHotmart' , component : ProdutoHotmartListComponent },
    { path: 'tokenAcesso' , component : TokenAcessoListComponent },
    { path: 'ideiaPalavraChave' , component: IdeiaPalavraChaveListComponent },
    { path: 'produtoAfiliadoHotmart' , component: ProdutoAfiliadoHotmartListComponent },
    { path: 'produtoAfiliadoHotmartDetalhe/:id' , component: ProdutoAfiliadoHotmartDetalheComponent },
    { path: 'modeloCampanhaAdsTeste' , component: ModeloCampanhaAdsTesteListComponent },
    { path: 'pixelGoogle' , component: PixelGoogleListComponent },

    { path: 'anuncioAds/:id' , component: AnuncioAdsListaComponent },
    { path: 'campanhaAdsTeste/:id' , component: CampanhaAdsTesteListaComponent },
    { path: 'campanhaAdsTesteDetalhe/:id' , component: CampanhaAdsTesteDetalheComponent },

    { path: '',  component: HomeComponent  }
    //{ path: '',          redirectTo: 'home', pathMatch: 'full' }
]