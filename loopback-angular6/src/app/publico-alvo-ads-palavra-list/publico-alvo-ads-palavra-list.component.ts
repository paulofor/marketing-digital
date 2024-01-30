import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PublicoAlvoAdsPalavraApi } from '../shared/sdk';
import { PublicoAlvoAdsPalavraListBaseComponent } from './publico-alvo-ads-palavra-list-base.component';

@Component({
	selector: 'app-publico-alvo-ads-palavra-list',
  	templateUrl: './publico-alvo-ads-palavra-list.component.html',
  	styleUrls: ['./publico-alvo-ads-palavra-list.component.css']
})
export class PublicoAlvoAdsPalavraListComponent extends PublicoAlvoAdsPalavraListBaseComponent {

	constructor(protected srv: PublicoAlvoAdsPalavraApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
