import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PlataformaVendaApi } from '../shared/sdk';
import { PlataformaVendaListBaseComponent } from './plataforma-venda-list-base.component';

@Component({
	selector: 'app-plataforma-venda-list',
  	templateUrl: './plataforma-venda-list.component.html',
  	styleUrls: ['./plataforma-venda-list.component.css']
})
export class PlataformaVendaListComponent extends PlataformaVendaListBaseComponent {

	constructor(protected srv: PlataformaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
