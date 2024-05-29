import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PalavraChaveRaizApi } from '../shared/sdk';
import { PalavraChaveRaizListSimplesBaseComponent } from './palavra-chave-raiz-list-simples-base.component';

@Component({
	selector: 'app-palavra-chave-raiz-list-simples',
  	templateUrl: './palavra-chave-raiz-list-simples.component.html',
  	styleUrls: ['./palavra-chave-raiz-list-simples.component.css']
})
export class PalavraChaveRaizListSimplesComponent extends PalavraChaveRaizListSimplesBaseComponent {

	constructor(protected srv: PalavraChaveRaizApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
