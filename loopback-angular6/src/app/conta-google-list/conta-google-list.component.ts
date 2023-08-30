import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ContaGoogleApi } from '../shared/sdk';
import { ContaGoogleListBaseComponent } from './conta-google-list-base.component';

@Component({
	selector: 'app-conta-google-list',
  	templateUrl: './conta-google-list.component.html',
  	styleUrls: ['./conta-google-list.component.css']
})
export class ContaGoogleListComponent extends ContaGoogleListBaseComponent {

	constructor(protected srv: ContaGoogleApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
