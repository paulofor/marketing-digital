import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VisitaProdutoHotmartApi } from '../shared/sdk';
import { VisitaProdutoHotmartListSimplesBaseComponent } from './visita-produto-hotmart-list-simples-base.component';

@Component({
	selector: 'app-visita-produto-hotmart-list-simples',
  	templateUrl: './visita-produto-hotmart-list-simples.component.html',
  	styleUrls: ['./visita-produto-hotmart-list-simples.component.css']
})
export class VisitaProdutoHotmartListSimplesComponent extends VisitaProdutoHotmartListSimplesBaseComponent {

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
