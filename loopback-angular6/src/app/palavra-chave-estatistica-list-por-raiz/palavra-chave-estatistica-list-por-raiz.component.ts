import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PalavraChaveEstatisticaApi } from '../shared/sdk';
import { PalavraChaveEstatisticaListPorRaizBaseComponent } from './palavra-chave-estatistica-list-por-raiz-base.component';

@Component({
	selector: 'app-palavra-chave-estatistica-list-por-raiz',
  	templateUrl: './palavra-chave-estatistica-list-por-raiz.component.html',
  	styleUrls: ['./palavra-chave-estatistica-list-por-raiz.component.css']
})
export class PalavraChaveEstatisticaListPorRaizComponent extends PalavraChaveEstatisticaListPorRaizBaseComponent {

	constructor(protected srv: PalavraChaveEstatisticaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
