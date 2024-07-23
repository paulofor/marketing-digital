import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsPixelVendaApi } from '../shared/sdk';
import { MetaAdsPixelVendaListHotmartBaseComponent } from './meta-ads-pixel-venda-list-hotmart-base.component';

@Component({
	selector: 'app-meta-ads-pixel-venda-list-hotmart',
  	templateUrl: './meta-ads-pixel-venda-list-hotmart.component.html',
  	styleUrls: ['./meta-ads-pixel-venda-list-hotmart.component.css']
})
export class MetaAdsPixelVendaListHotmartComponent extends MetaAdsPixelVendaListHotmartBaseComponent {

	constructor(protected srv: MetaAdsPixelVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
