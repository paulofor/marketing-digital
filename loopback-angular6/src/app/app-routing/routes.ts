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
    { path: 'contaGoogle' , component: ContaGoogleListComponent },

    { path: 'resumoVisitaHotmart' , component: VisitaProdutoHotmartResumoComponent },

    { path: 'anuncioAds/:id' , component: AnuncioAdsListaComponent },
    { path: 'campanhaAdsTeste/:id' , component: CampanhaAdsTesteListaComponent },
    { path: 'campanhaAdsTesteDetalhe/:id' , component: CampanhaAdsTesteDetalheComponent },

    { path: 'melhoresCpc' , component: IdeiaPalavraChaveListSimplesMelhoresCpcComponent },
    { path: 'melhoresTop' , component: IdeiaPalavraChaveListSimplesTopComponent },
    { path: 'melhoresTopPesquisa' , component: IdeiaPalavraChaveListSimplesTopPesquisaComponent },

    { path: 'campanhaAdsTesteAtivaMetrica' , component: CampanhaAdsTesteListAtivaMetricaComponent },

    { path: 'produtosTopVendas' , component: ProdutosTopVendasComponent },
    { path: 'produtoAfiliadoTrabalho' , component: ProdutoAfiliadoTrabalhoComponent },

    { path: '',  component: HomeComponent  }
    //{ path: '',          redirectTo: 'home', pathMatch: 'full' }
]