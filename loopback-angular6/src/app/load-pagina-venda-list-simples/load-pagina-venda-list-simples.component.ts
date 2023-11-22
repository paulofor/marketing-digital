import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LoadPaginaVenda, LoadPaginaVendaApi } from '../shared/sdk';
import { LoadPaginaVendaListSimplesBaseComponent } from './load-pagina-venda-list-simples-base.component';

@Component({
	selector: 'app-load-pagina-venda-list-simples',
  	templateUrl: './load-pagina-venda-list-simples.component.html',
  	styleUrls: ['./load-pagina-venda-list-simples.component.css']
})
export class LoadPaginaVendaListSimplesComponent extends LoadPaginaVendaListSimplesBaseComponent {

	constructor(protected srv: LoadPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
        this.srv.UltimosAcessos()
	     .subscribe((result:LoadPaginaVenda[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }
}
