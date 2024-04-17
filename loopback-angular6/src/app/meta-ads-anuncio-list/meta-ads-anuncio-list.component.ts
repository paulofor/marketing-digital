import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsAnuncioApi } from '../shared/sdk';
import { MetaAdsAnuncioListBaseComponent } from './meta-ads-anuncio-list-base.component';

@Component({
	selector: 'app-meta-ads-anuncio-list',
  	templateUrl: './meta-ads-anuncio-list.component.html',
  	styleUrls: ['./meta-ads-anuncio-list.component.css']
})
export class MetaAdsAnuncioListComponent extends MetaAdsAnuncioListBaseComponent {

	constructor(protected srv: MetaAdsAnuncioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
