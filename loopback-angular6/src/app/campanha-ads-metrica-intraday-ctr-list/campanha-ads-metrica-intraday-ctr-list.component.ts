import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsMetricaIntradayApi } from '../shared/sdk';
import { CampanhaAdsMetricaIntradayCtrListBaseComponent } from './campanha-ads-metrica-intraday-ctr-list-base.component';
import { ExibeTextoModalComponent } from '../exibe-texto-modal/exibe-texto-modal.component';

@Component({
	selector: 'app-campanha-ads-metrica-intraday-ctr-list',
  	templateUrl: './campanha-ads-metrica-intraday-ctr-list.component.html',
  	styleUrls: ['./campanha-ads-metrica-intraday-ctr-list.component.css']
})
export class CampanhaAdsMetricaIntradayCtrListComponent extends CampanhaAdsMetricaIntradayCtrListBaseComponent {

	constructor(protected srv: CampanhaAdsMetricaIntradayApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	json(campanha) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ExibeTextoModalComponent, {
            width: '800px',
            data: {
                texto: campanha.jsonAds,
				titulo: "Campanha"
            }
        });
    }


	jsonGrupo(campanha) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ExibeTextoModalComponent, {
            width: '800px',
            data: {
                texto: campanha.jsonGrupoAnuncio,
				titulo: "Grupo Anúncio"
            }
        });
    }


	jsonAudiencia(campanha) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ExibeTextoModalComponent, {
            width: '800px',
            data: {
                texto: campanha.jsonGrupoAudiencia,
				titulo: "Audiência Grupo"
            }
        });
    }
}
