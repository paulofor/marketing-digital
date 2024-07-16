import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BusinessManagerApi } from '../shared/sdk';
import { BusinessManagerListBaseComponent } from './business-manager-list-base.component';

@Component({
	selector: 'app-business-manager-list',
  	templateUrl: './business-manager-list.component.html',
  	styleUrls: ['./business-manager-list.component.css']
})
export class BusinessManagerListComponent extends BusinessManagerListBaseComponent {

	constructor(protected srv: BusinessManagerApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
