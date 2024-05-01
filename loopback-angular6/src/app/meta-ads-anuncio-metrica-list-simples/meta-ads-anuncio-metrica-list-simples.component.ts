import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsAnuncioMetricaApi } from '../shared/sdk';
import { MetaAdsAnuncioMetricaListSimplesBaseComponent } from './meta-ads-anuncio-metrica-list-simples-base.component';

@Component({
	selector: 'app-meta-ads-anuncio-metrica-list-simples',
  	templateUrl: './meta-ads-anuncio-metrica-list-simples.component.html',
  	styleUrls: ['./meta-ads-anuncio-metrica-list-simples.component.css']
})
export class MetaAdsAnuncioMetricaListSimplesComponent extends MetaAdsAnuncioMetricaListSimplesBaseComponent {

	constructor(protected srv: MetaAdsAnuncioMetricaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro(): {} {
		return {
			'where' : {'maisRecente' : 1}
		}
	}
}
