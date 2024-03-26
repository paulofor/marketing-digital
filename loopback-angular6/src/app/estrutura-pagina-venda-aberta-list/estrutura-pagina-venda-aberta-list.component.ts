import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { EstruturaPaginaVendaAbertaApi } from '../shared/sdk';
import { EstruturaPaginaVendaAbertaListBaseComponent } from './estrutura-pagina-venda-aberta-list-base.component';

@Component({
	selector: 'app-estrutura-pagina-venda-aberta-list',
  	templateUrl: './estrutura-pagina-venda-aberta-list.component.html',
  	styleUrls: ['./estrutura-pagina-venda-aberta-list.component.css']
})
export class EstruturaPaginaVendaAbertaListComponent extends EstruturaPaginaVendaAbertaListBaseComponent {

	constructor(protected srv: EstruturaPaginaVendaAbertaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
