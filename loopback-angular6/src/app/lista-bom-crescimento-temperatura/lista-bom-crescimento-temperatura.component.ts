import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { VisitaProdutoHotmartApi } from '../shared/sdk';
import { ListaBomCrescimentoTemperaturaBaseComponent } from './lista-bom-crescimento-temperatura-base.component';

@Component({
	selector: 'app-lista-bom-crescimento-temperatura',
  	templateUrl: './lista-bom-crescimento-temperatura.component.html',
  	styleUrls: ['./lista-bom-crescimento-temperatura.component.css']
})
export class ListaBomCrescimentoTemperaturaComponent extends ListaBomCrescimentoTemperaturaBaseComponent {

	constructor(protected srv: VisitaProdutoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
