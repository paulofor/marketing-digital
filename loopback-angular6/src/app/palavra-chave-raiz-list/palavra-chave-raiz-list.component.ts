import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PalavraChaveRaizApi } from '../shared/sdk';
import { PalavraChaveRaizListBaseComponent } from './palavra-chave-raiz-list-base.component';

@Component({
	selector: 'app-palavra-chave-raiz-list',
  	templateUrl: './palavra-chave-raiz-list.component.html',
  	styleUrls: ['./palavra-chave-raiz-list.component.css']
})
export class PalavraChaveRaizListComponent extends PalavraChaveRaizListBaseComponent {

	constructor(protected srv: PalavraChaveRaizApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {'order' : 'palavra'}
	}
}
