import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsMetrica, CampanhaAdsMetricaApi } from '../shared/sdk';
import { HistoricoPorCodigoAdsBaseComponent } from './historico-por-codigo-ads-base.component';
import { ExibeTextoModalComponent } from '../exibe-texto-modal/exibe-texto-modal.component';

@Component({
	selector: 'app-historico-por-codigo-ads',
  	templateUrl: './historico-por-codigo-ads.component.html',
  	styleUrls: ['./historico-por-codigo-ads.component.css']
})
export class HistoricoPorCodigoAdsComponent extends HistoricoPorCodigoAdsBaseComponent {

	constructor(protected srv: CampanhaAdsMetricaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	carregaTela() {
		this.router.params.subscribe((params) => {
			let id = params['id'];
			console.log('ID:' , id);
			this.srv.HistoricoPorCodigoAds(id)
				.subscribe((result:CampanhaAdsMetrica[]) => {
					console.log('result: ' , result);
					this.listaBase = result;
					this.posCarregaLista();
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
