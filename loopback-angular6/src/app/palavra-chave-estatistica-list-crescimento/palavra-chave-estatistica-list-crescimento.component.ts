import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PalavraChaveEstatisticaApi } from '../shared/sdk';
import { PalavraChaveEstatisticaListCrescimentoBaseComponent } from './palavra-chave-estatistica-list-crescimento-base.component';

@Component({
	selector: 'app-palavra-chave-estatistica-list-crescimento',
  	templateUrl: './palavra-chave-estatistica-list-crescimento.component.html',
  	styleUrls: ['./palavra-chave-estatistica-list-crescimento.component.css']
})
export class PalavraChaveEstatisticaListCrescimentoComponent extends PalavraChaveEstatisticaListCrescimentoBaseComponent {

	constructor(protected srv: PalavraChaveEstatisticaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
