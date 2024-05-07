import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoProprioApi } from '../shared/sdk';
import { ProdutoProprioListBaseComponent } from './produto-proprio-list-base.component';

@Component({
	selector: 'app-produto-proprio-list',
  	templateUrl: './produto-proprio-list.component.html',
  	styleUrls: ['./produto-proprio-list.component.css']
})
export class ProdutoProprioListComponent extends ProdutoProprioListBaseComponent {

	constructor(protected srv: ProdutoProprioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro(): {} {
		let filtro = {'include' : 'contaGoogle', 'order' : 'id desc'};
		return filtro;
	}

}
