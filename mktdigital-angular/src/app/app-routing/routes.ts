import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PlataformaListComponent } from '../plataforma-list/plataforma-list.component';
import { ProdutoHotmartListComponent } from '../produto-hotmart-list/produto-hotmart-list.component';
import { TokenAcessoListComponent } from '../token-acesso-list/token-acesso-list.component';
import { IdeiaPalavraChaveListComponent } from '../ideia-palavra-chave-list/ideia-palavra-chave-list.component';
import { ProdutoAfiliadoHotmartListComponent } from '../produto-afiliado-hotmart-list/produto-afiliado-hotmart-list.component';



export const routes : Routes = [
    { path: 'home' , component: HomeComponent },

    { path: 'plataforma' , component: PlataformaListComponent },
    { path: 'produtoHotmart' , component : ProdutoHotmartListComponent },
    { path: 'tokenAcesso' , component : TokenAcessoListComponent },
    { path: 'ideiaPalavraChave' , component: IdeiaPalavraChaveListComponent },
    { path: 'produtoAfiliadoHotmart' , component: ProdutoAfiliadoHotmartListComponent },

    { path: '',  component: HomeComponent  }
    //{ path: '',          redirectTo: 'home', pathMatch: 'full' }
]