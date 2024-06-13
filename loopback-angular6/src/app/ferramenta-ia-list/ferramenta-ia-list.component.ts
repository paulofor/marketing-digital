import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FerramentaIaApi } from '../shared/sdk';
import { FerramentaIaListBaseComponent } from './ferramenta-ia-list-base.component';

@Component({
	selector: 'app-ferramenta-ia-list',
  	templateUrl: './ferramenta-ia-list.component.html',
  	styleUrls: ['./ferramenta-ia-list.component.css']
})
export class FerramentaIaListComponent extends FerramentaIaListBaseComponent {

	constructor(protected srv: FerramentaIaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'order' : 'nome'
		}
	}
}
