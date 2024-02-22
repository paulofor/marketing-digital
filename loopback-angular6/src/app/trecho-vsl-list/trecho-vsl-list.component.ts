import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TrechoVslApi } from '../shared/sdk';
import { TrechoVslListBaseComponent } from './trecho-vsl-list-base.component';

@Component({
	selector: 'app-trecho-vsl-list',
  	templateUrl: './trecho-vsl-list.component.html',
  	styleUrls: ['./trecho-vsl-list.component.css']
})
export class TrechoVslListComponent extends TrechoVslListBaseComponent {

	constructor(protected srv: TrechoVslApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
