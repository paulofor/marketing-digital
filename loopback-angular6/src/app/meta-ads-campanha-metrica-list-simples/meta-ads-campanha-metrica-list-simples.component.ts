import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsCampanhaMetricaApi } from '../shared/sdk';
import { MetaAdsCampanhaMetricaListSimplesBaseComponent } from './meta-ads-campanha-metrica-list-simples-base.component';
import { retry } from 'rxjs/operators';
import { ExibeTextoModalComponent } from '../exibe-texto-modal/exibe-texto-modal.component';

@Component({
	selector: 'app-meta-ads-campanha-metrica-list-simples',
  	templateUrl: './meta-ads-campanha-metrica-list-simples.component.html',
  	styleUrls: ['./meta-ads-campanha-metrica-list-simples.component.css']
})
export class MetaAdsCampanhaMetricaListSimplesComponent extends MetaAdsCampanhaMetricaListSimplesBaseComponent {

	constructor(protected srv: MetaAdsCampanhaMetricaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro(): {} {
		return {
			'where' : {'maisRecente' : 1}
		}
	}

	json(campanha) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ExibeTextoModalComponent, {
            width: '800px',
            data: {
                texto: campanha.json,
				titulo: "Campanha"
            }
        });
    }
}
