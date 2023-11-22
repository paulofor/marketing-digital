import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsMetricaApi } from '../shared/sdk';
import { CampanhaAdsMetricaListSimplesBaseComponent } from './campanha-ads-metrica-list-simples-base.component';

@Component({
	selector: 'app-campanha-ads-metrica-list-simples',
  	templateUrl: './campanha-ads-metrica-list-simples.component.html',
  	styleUrls: ['./campanha-ads-metrica-list-simples.component.css']
})
export class CampanhaAdsMetricaListSimplesComponent extends CampanhaAdsMetricaListSimplesBaseComponent {

	constructor(protected srv: CampanhaAdsMetricaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'order' : 'dataHora desc',
			'include' : 'contaGoogle'
		}
	}
}
