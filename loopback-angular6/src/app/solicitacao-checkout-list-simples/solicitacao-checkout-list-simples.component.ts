import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SolicitacaoCheckoutApi } from '../shared/sdk';
import { SolicitacaoCheckoutListSimplesBaseComponent } from './solicitacao-checkout-list-simples-base.component';

@Component({
	selector: 'app-solicitacao-checkout-list-simples',
  	templateUrl: './solicitacao-checkout-list-simples.component.html',
  	styleUrls: ['./solicitacao-checkout-list-simples.component.css']
})
export class SolicitacaoCheckoutListSimplesComponent extends SolicitacaoCheckoutListSimplesBaseComponent {

	constructor(protected srv: SolicitacaoCheckoutApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'include' : 'produtoAfiliadoHotmart',
			'order' : 'dataHora desc',
			'limit' : 50
		}
	}

}
