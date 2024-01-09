import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaVendaApi } from '../shared/sdk';
import { PaginaVendaPorProdutoListBaseComponent } from './pagina-venda-por-produto-list-base.component';

@Component({
	selector: 'app-pagina-venda-por-produto-list',
  	templateUrl: './pagina-venda-por-produto-list.component.html',
  	styleUrls: ['./pagina-venda-por-produto-list.component.css']
})
export class PaginaVendaPorProdutoListComponent extends PaginaVendaPorProdutoListBaseComponent {

	constructor(protected srv: PaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
