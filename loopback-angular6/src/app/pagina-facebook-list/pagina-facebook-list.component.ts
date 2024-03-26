import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaFacebookApi } from '../shared/sdk';
import { PaginaFacebookListBaseComponent } from './pagina-facebook-list-base.component';

@Component({
	selector: 'app-pagina-facebook-list',
  	templateUrl: './pagina-facebook-list.component.html',
  	styleUrls: ['./pagina-facebook-list.component.css']
})
export class PaginaFacebookListComponent extends PaginaFacebookListBaseComponent {

	constructor(protected srv: PaginaFacebookApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
