import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ContaFacebookApi } from '../shared/sdk';
import { ContaFacebookListBaseComponent } from './conta-facebook-list-base.component';

@Component({
	selector: 'app-conta-facebook-list',
  	templateUrl: './conta-facebook-list.component.html',
  	styleUrls: ['./conta-facebook-list.component.css']
})
export class ContaFacebookListComponent extends ContaFacebookListBaseComponent {

	constructor(protected srv: ContaFacebookApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
