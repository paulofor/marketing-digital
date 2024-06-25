import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VisitaProdutoHotmartApi } from '../shared/sdk';
import { ListaLowTickerBaseComponent } from './lista-low-ticker-base.component';

@Component({
	selector: 'app-lista-low-ticker',
  	templateUrl: './lista-low-ticker.component.html',
  	styleUrls: ['./lista-low-ticker.component.css']
})
export class ListaLowTickerComponent extends ListaLowTickerBaseComponent {

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'where' : {'and' : [
				{'maisRecente' : 1} , 
				{'temperatura' : {'gte': 40}}, 
				{'afiliacaoValor' : {'lt' : 70}}, 
				{'afiliacaoPercentual' : {'gte' : 40}}
			]},
			'order' : 'temperatura desc',
			'include' : ['produtoAfiliadoHotmart', 'produtoAfiliadoHotmartPendente'] ,
		}
	}

}
