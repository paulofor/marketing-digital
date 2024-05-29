import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PalavraChaveEstatisticaApi } from '../shared/sdk';
import { PalavraChaveEstatisticaListMelhoresBaseComponent } from './palavra-chave-estatistica-list-melhores-base.component';

@Component({
	selector: 'app-palavra-chave-estatistica-list-melhores',
  	templateUrl: './palavra-chave-estatistica-list-melhores.component.html',
  	styleUrls: ['./palavra-chave-estatistica-list-melhores.component.css']
})
export class PalavraChaveEstatisticaListMelhoresComponent extends PalavraChaveEstatisticaListMelhoresBaseComponent {

	constructor(protected srv: PalavraChaveEstatisticaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'where' : {'maisRecente' : 1},
			'order' : 'volumePesquisa desc',
			'limit' : 500,
			'include' : 'palavraChaveRaiz'
		}
	}

}
