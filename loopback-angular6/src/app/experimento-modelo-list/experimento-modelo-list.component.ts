import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ExperimentoModeloApi } from '../shared/sdk';
import { ExperimentoModeloListBaseComponent } from './experimento-modelo-list-base.component';

@Component({
	selector: 'app-experimento-modelo-list',
  	templateUrl: './experimento-modelo-list.component.html',
  	styleUrls: ['./experimento-modelo-list.component.css']
})
export class ExperimentoModeloListComponent extends ExperimentoModeloListBaseComponent {

	constructor(protected srv: ExperimentoModeloApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
