import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaVendaModeladaApi } from '../shared/sdk';
import { PaginaVendaModeladaDetalheBaseComponent } from './pagina-venda-modelada-detalhe-base.component';

@Component({
	selector: 'app-pagina-venda-modelada-detalhe',
  	templateUrl: './pagina-venda-modelada-detalhe.component.html',
  	styleUrls: ['./pagina-venda-modelada-detalhe.component.css']
})
export class PaginaVendaModeladaDetalheComponent extends PaginaVendaModeladaDetalheBaseComponent {

	alturaImagem: number;

	constructor(protected srv: PaginaVendaModeladaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	onImageLoad(event: any) {
		this.alturaImagem = event.target.height;
	}

}
