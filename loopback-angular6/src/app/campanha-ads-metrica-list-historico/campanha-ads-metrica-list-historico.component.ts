import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsMetricaApi } from '../shared/sdk';
import { CampanhaAdsMetricaListHistoricoBaseComponent } from './campanha-ads-metrica-list-historico-base.component';

@Component({
	selector: 'app-campanha-ads-metrica-list-historico',
  	templateUrl: './campanha-ads-metrica-list-historico.component.html',
  	styleUrls: ['./campanha-ads-metrica-list-historico.component.css']
})
export class CampanhaAdsMetricaListHistoricoComponent extends CampanhaAdsMetricaListHistoricoBaseComponent {

	constructor(protected srv: CampanhaAdsMetricaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
