import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ModeloPaginaVendaVslApi } from '../shared/sdk';
import { ModeloPaginaVendaVslListBaseComponent } from './modelo-pagina-venda-vsl-list-base.component';

@Component({
	selector: 'app-modelo-pagina-venda-vsl-list',
  	templateUrl: './modelo-pagina-venda-vsl-list.component.html',
  	styleUrls: ['./modelo-pagina-venda-vsl-list.component.css']
})
export class ModeloPaginaVendaVslListComponent extends ModeloPaginaVendaVslListBaseComponent {

	constructor(protected srv: ModeloPaginaVendaVslApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
