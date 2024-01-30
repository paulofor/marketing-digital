import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaVendaPropriaApi } from '../shared/sdk';
import { PaginaVendaPropriaDetalheBaseComponent } from './pagina-venda-propria-detalhe-base.component';

@Component({
	selector: 'app-pagina-venda-propria-detalhe',
  	templateUrl: './pagina-venda-propria-detalhe.component.html',
  	styleUrls: ['./pagina-venda-propria-detalhe.component.css']
})
export class PaginaVendaPropriaDetalheComponent extends PaginaVendaPropriaDetalheBaseComponent {

	constructor(protected srv: PaginaVendaPropriaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
