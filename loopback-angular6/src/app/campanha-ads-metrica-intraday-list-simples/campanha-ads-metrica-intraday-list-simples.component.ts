import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsMetricaIntradayApi } from '../shared/sdk';
import { CampanhaAdsMetricaIntradayListSimplesBaseComponent } from './campanha-ads-metrica-intraday-list-simples-base.component';
import { ExibeTextoModalComponent } from '../exibe-texto-modal/exibe-texto-modal.component';

@Component({
	selector: 'app-campanha-ads-metrica-intraday-list-simples',
  	templateUrl: './campanha-ads-metrica-intraday-list-simples.component.html',
  	styleUrls: ['./campanha-ads-metrica-intraday-list-simples.component.css']
})
export class CampanhaAdsMetricaIntradayListSimplesComponent extends CampanhaAdsMetricaIntradayListSimplesBaseComponent {

	resumoDia: any

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

	preCarregaTela() {
		this.srv.TotaisDia()
			.subscribe((result:any) => {
				console.log('resumoDia:', result);
				this.resumoDia = result;
			})
	}

	getFiltro() {
		return {
			'include' : 'contaGoogle',
			'order' : 'custoDia desc'
		}
	}

	tipoCard(item) {
		if (item.status=='ENABLED') {
			return 'texto-forte'
		} else {
			return 'texto-fraco'
		}
	}
}
