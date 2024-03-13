import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaVendaModeladaApi } from '../shared/sdk';
import { PaginaVendaModeladaListBaseComponent } from './pagina-venda-modelada-list-base.component';

@Component({
	selector: 'app-pagina-venda-modelada-list',
  	templateUrl: './pagina-venda-modelada-list.component.html',
  	styleUrls: ['./pagina-venda-modelada-list.component.css']
})
export class PaginaVendaModeladaListComponent extends PaginaVendaModeladaListBaseComponent {

	constructor(protected srv: PaginaVendaModeladaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
