import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VisitaProdutoHotmartApi } from '../shared/sdk';
import { ProdutosTopVendasBaseComponent } from './produtos-top-vendas-base.component';
import { ProdutoAfiliadoHotmartEditComponent } from '../produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component';

@Component({
	selector: 'app-produtos-top-vendas',
  	templateUrl: './produtos-top-vendas.component.html',
  	styleUrls: ['./produtos-top-vendas.component.css']
})
export class ProdutosTopVendasComponent extends ProdutosTopVendasBaseComponent {

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getDialogo1() : any {
		return ProdutoAfiliadoHotmartEditComponent
	}

	getFiltro() {
		return{
			'where': {
			  'and': [
				{'maisRecente': 1}
			  ]
			},
			'order': ['temperatura desc', 'afiliacaoPercentual desc'],
			'limit': 50,
			'include': [
				{
					'relation': 'ideiaPalavraChaves',
					'scope': {
						'where': {'maisRecente': 1},
						'order' : 'mediaPesquisa desc'
					},
				},
				{'relation': 'produtoAfiliadoHotmart'}
			]
			}
	}
}
