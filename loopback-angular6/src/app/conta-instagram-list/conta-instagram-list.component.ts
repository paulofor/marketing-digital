import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ContaInstagramApi } from '../shared/sdk';
import { ContaInstagramListBaseComponent } from './conta-instagram-list-base.component';

@Component({
	selector: 'app-conta-instagram-list',
  	templateUrl: './conta-instagram-list.component.html',
  	styleUrls: ['./conta-instagram-list.component.css']
})
export class ContaInstagramListComponent extends ContaInstagramListBaseComponent {

	constructor(protected srv: ContaInstagramApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
