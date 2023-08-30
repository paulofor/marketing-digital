import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { ProdutoAfiliadoHotmartDetalheBaseComponent } from './produto-afiliado-hotmart-detalhe-base.component';

@Component({
	selector: 'app-produto-afiliado-hotmart-detalhe',
  	templateUrl: './produto-afiliado-hotmart-detalhe.component.html',
  	styleUrls: ['./produto-afiliado-hotmart-detalhe.component.css']
})
export class ProdutoAfiliadoHotmartDetalheComponent extends ProdutoAfiliadoHotmartDetalheBaseComponent {

	constructor(protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
		  'include' : [
			{ 'relation' : 'visitaProdutoHotmarts' , 'scope' : {
			  	'order' : 'dataInsercao desc',
				'include' : { 'relation' : 'produtoAfiliadoMetricas'}
			}},
			'contaGoogle'
		  ]
		}
	  }
	
}
