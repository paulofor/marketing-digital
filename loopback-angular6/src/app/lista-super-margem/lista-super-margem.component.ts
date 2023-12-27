import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VisitaProdutoHotmartApi } from '../shared/sdk';
import { ListaSuperMargemBaseComponent } from './lista-super-margem-base.component';

@Component({
	selector: 'app-lista-super-margem',
  	templateUrl: './lista-super-margem.component.html',
  	styleUrls: ['./lista-super-margem.component.css']
})
export class ListaSuperMargemComponent extends ListaSuperMargemBaseComponent {

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'include' : ['produtoAfiliadoHotmart', 'produtoAfiliadoHotmartPendente'] ,
			'where' : {'and' : [
				{'afiliacaoPercentual' : {'gte' : 60}},
				{'temperatura' : {'gte' : 30}},
				{'maisRecente' : 1}
			]},
			'order' : 'temperatura desc'
		}
	}
}
