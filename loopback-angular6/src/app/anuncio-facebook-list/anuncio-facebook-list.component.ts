import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsAnuncioApi } from '../shared/sdk';
import { AnuncioFacebookListBaseComponent } from './anuncio-facebook-list-base.component';

@Component({
	selector: 'app-anuncio-facebook-list',
  	templateUrl: './anuncio-facebook-list.component.html',
  	styleUrls: ['./anuncio-facebook-list.component.css']
})
export class AnuncioFacebookListComponent extends AnuncioFacebookListBaseComponent {

	constructor(protected srv: MetaAdsAnuncioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
