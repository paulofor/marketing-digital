import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PlataformaVenda, PlataformaVendaApi, ProdutoAfiliadoGenericoApi } from '../shared/sdk';
import { ProdutoAfiliadoGenericoListBaseComponent } from './produto-afiliado-generico-list-base.component';

@Component({
	selector: 'app-produto-afiliado-generico-list',
  	templateUrl: './produto-afiliado-generico-list.component.html',
  	styleUrls: ['./produto-afiliado-generico-list.component.css']
})
export class ProdutoAfiliadoGenericoListComponent extends ProdutoAfiliadoGenericoListBaseComponent {

	listaPlataforma: PlataformaVenda[];

	constructor(protected srv: ProdutoAfiliadoGenericoApi, protected router: ActivatedRoute, 
		protected dialog: MatDialog, private srvPlataforma:PlataformaVendaApi) { 
		super(srv,router,dialog);
	}

	

	getFiltro(): {} {
		return {'include' : 'plataformaVenda'}
	}
}
