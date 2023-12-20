import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoAfiliadoHotmartApi, VisitaProdutoHotmartApi } from '../shared/sdk';
import { ListaAltaMargemAltaTemperaturaBaseComponent } from './lista-alta-margem-alta-temperatura-base.component';

@Component({
	selector: 'app-lista-alta-margem-alta-temperatura',
  	templateUrl: './lista-alta-margem-alta-temperatura.component.html',
  	styleUrls: ['./lista-alta-margem-alta-temperatura.component.css']
})
export class ListaAltaMargemAltaTemperaturaComponent extends ListaAltaMargemAltaTemperaturaBaseComponent {

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'include' : 'produtoAfiliadoHotmart',
			'where' : {'and' : [
				{'afiliacaoPercentual' : {'gte' : 40}},
				{'temperatura' : {'gte' : 60}},
				{'maisRecente' : 1}
			]},
			'order' : 'temperatura desc'
		}
	}
}
