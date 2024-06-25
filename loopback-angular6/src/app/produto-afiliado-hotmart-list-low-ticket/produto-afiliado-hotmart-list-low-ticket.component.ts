import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { ProdutoAfiliadoHotmartListLowTicketBaseComponent } from './produto-afiliado-hotmart-list-low-ticket-base.component';

@Component({
	selector: 'app-produto-afiliado-hotmart-list-low-ticket',
  	templateUrl: './produto-afiliado-hotmart-list-low-ticket.component.html',
  	styleUrls: ['./produto-afiliado-hotmart-list-low-ticket.component.css']
})
export class ProdutoAfiliadoHotmartListLowTicketComponent extends ProdutoAfiliadoHotmartListLowTicketBaseComponent {

	constructor(protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'where' : {'and' : [{'ativo' : 1} , {'afiliacaoValor' : {'lt' : 70}}, {'afiliacaoPercentual' : {'gte' : 40}}]},
			'order' : 'temperaturaAtual desc',
			'include' : {'relation' :'visitaProdutoHotmarts' , 'scope' : {'where' : {'maisRecente' : 1 }}}
		}
	}
}
