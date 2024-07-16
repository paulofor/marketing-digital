import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ContaNegocioFacebookApi } from '../shared/sdk';
import { ContaNegocioFacebookListBaseComponent } from './conta-negocio-facebook-list-base.component';

@Component({
	selector: 'app-conta-negocio-facebook-list',
  	templateUrl: './conta-negocio-facebook-list.component.html',
  	styleUrls: ['./conta-negocio-facebook-list.component.css']
})
export class ContaNegocioFacebookListComponent extends ContaNegocioFacebookListBaseComponent {

	constructor(protected srv: ContaNegocioFacebookApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
