import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VisitaProdutoHotmartApi } from '../shared/sdk';
import { ProdutosTopVendasBaseComponent } from './produtos-top-vendas-base.component';

@Component({
	selector: 'app-produtos-top-vendas',
  	templateUrl: './produtos-top-vendas.component.html',
  	styleUrls: ['./produtos-top-vendas.component.css']
})
export class ProdutosTopVendasComponent extends ProdutosTopVendasBaseComponent {

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return{
			'where': {
			  'and': [
				{'maisRecente': 1},
				{'temperatura': {'gt': 100}}
			  ]
			},
			'order': ['afiliacaoPercentual desc', 'temperatura desc'],
			'limit': 20,
			'include': {
			  'relation': 'ideiaPalavraChave',
			  'scope': {
				'where': {'maisRecente': 1}
			  }
			}
		  }
		  
	}
}
