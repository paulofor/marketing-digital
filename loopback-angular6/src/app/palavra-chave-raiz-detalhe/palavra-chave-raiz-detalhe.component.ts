import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PalavraChaveRaizApi } from '../shared/sdk';
import { PalavraChaveRaizDetalheBaseComponent } from './palavra-chave-raiz-detalhe-base.component';

@Component({
	selector: 'app-palavra-chave-raiz-detalhe',
  	templateUrl: './palavra-chave-raiz-detalhe.component.html',
  	styleUrls: ['./palavra-chave-raiz-detalhe.component.css']
})
export class PalavraChaveRaizDetalheComponent extends PalavraChaveRaizDetalheBaseComponent {

	constructor(protected srv: PalavraChaveRaizApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro(): {} {
		return {
			'include' : {'relation' : 'palavraChaveEstatisticas', 'scope' : {
				'where' : {'maisRecente' : 1},
				'order' : 'volumePesquisa desc'
			}}
		}
	}

}
