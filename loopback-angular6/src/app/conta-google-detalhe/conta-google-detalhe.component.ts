import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ContaGoogleApi } from '../shared/sdk';
import { ContaGoogleDetalheBaseComponent } from './conta-google-detalhe-base.component';
import { ExibeTextoModalComponent } from '../exibe-texto-modal/exibe-texto-modal.component';

@Component({
	selector: 'app-conta-google-detalhe',
  	templateUrl: './conta-google-detalhe.component.html',
  	styleUrls: ['./conta-google-detalhe.component.css']
})
export class ContaGoogleDetalheComponent extends ContaGoogleDetalheBaseComponent {

	constructor(protected srv: ContaGoogleApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'include' : [
				{ 'relation' : 'publicoAlvoAdsDiarios' , 'scope' : {'where' : {'maisRecente' : 1 }}},
				{ 'relation' : 'segmentoMercadoAdsPersonalizados' , 'scope' : {'where' : {'maisRecente' : 1 }}},
				{ 'relation' : 'campanhaAdsMetricas' , 'scope' : {
					'where' : {'maisRecente' : 1 },
					'order' : 'custoCampanha desc'
				}}
			]
		}
	}

	json(segmento) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ExibeTextoModalComponent, {
            width: '800px',
            data: {
                texto: segmento.jsonAds
            }
        });
    }

}
