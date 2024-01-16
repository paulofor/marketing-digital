import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ElementoModeloPaginaVendaApi } from '../shared/sdk';
import { ElementoModeloPaginaVendaListBaseComponent } from './elemento-modelo-pagina-venda-list-base.component';

@Component({
	selector: 'app-elemento-modelo-pagina-venda-list',
  	templateUrl: './elemento-modelo-pagina-venda-list.component.html',
  	styleUrls: ['./elemento-modelo-pagina-venda-list.component.css']
})
export class ElementoModeloPaginaVendaListComponent extends ElementoModeloPaginaVendaListBaseComponent {

	constructor(protected srv: ElementoModeloPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
