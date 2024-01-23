import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsMetricaIntraday, CampanhaAdsMetricaIntradayApi } from '../shared/sdk';
import { CampanhaAdsMetricaIntradayPorCampanhaListBaseComponent } from './campanha-ads-metrica-intraday-por-campanha-list-base.component';
import { ExibeTextoModalComponent } from '../exibe-texto-modal/exibe-texto-modal.component';

@Component({
	selector: 'app-campanha-ads-metrica-intraday-por-campanha-list',
  	templateUrl: './campanha-ads-metrica-intraday-por-campanha-list.component.html',
  	styleUrls: ['./campanha-ads-metrica-intraday-por-campanha-list.component.css']
})
export class CampanhaAdsMetricaIntradayPorCampanhaListComponent extends CampanhaAdsMetricaIntradayPorCampanhaListBaseComponent {

	constructor(protected srv: CampanhaAdsMetricaIntradayApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	carregaTela() {
		this.router.params.subscribe((params) => {
		let codigoAds = params['id'];

		this.srv.ListaHistorico(codigoAds,60)
	 		.subscribe((result: CampanhaAdsMetricaIntraday[]) => {
				console.log('result-historico: ' , result);
				this.listaBase = result;
			})
		})
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
