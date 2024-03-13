import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AgendaCampanhaApi } from '../shared/sdk';
import { AgendaCampanhaListBaseComponent } from './agenda-campanha-list-base.component';

@Component({
	selector: 'app-agenda-campanha-list',
  	templateUrl: './agenda-campanha-list.component.html',
  	styleUrls: ['./agenda-campanha-list.component.css']
})
export class AgendaCampanhaListComponent extends AgendaCampanhaListBaseComponent {

	constructor(protected srv: AgendaCampanhaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
