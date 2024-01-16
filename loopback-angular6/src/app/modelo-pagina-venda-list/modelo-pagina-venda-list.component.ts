import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ModeloPaginaVendaApi } from '../shared/sdk';
import { ModeloPaginaVendaListBaseComponent } from './modelo-pagina-venda-list-base.component';

@Component({
	selector: 'app-modelo-pagina-venda-list',
  	templateUrl: './modelo-pagina-venda-list.component.html',
  	styleUrls: ['./modelo-pagina-venda-list.component.css']
})
export class ModeloPaginaVendaListComponent extends ModeloPaginaVendaListBaseComponent {

	constructor(protected srv: ModeloPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
