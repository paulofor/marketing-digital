import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ExperimentoModeloApi } from '../shared/sdk';
import { ExperimentoModeloDetalheBaseComponent } from './experimento-modelo-detalhe-base.component';
import { CampanhaAdsExperimentoEditComponent } from '../campanha-ads-experimento-edit/campanha-ads-experimento-edit.component';
import { EvolucaoExperimentoEditComponent } from '../evolucao-experimento-edit/evolucao-experimento-edit.component';

@Component({
	selector: 'app-experimento-modelo-detalhe',
  	templateUrl: './experimento-modelo-detalhe.component.html',
  	styleUrls: ['./experimento-modelo-detalhe.component.css']
})
export class ExperimentoModeloDetalheComponent extends ExperimentoModeloDetalheBaseComponent {

	constructor(protected srv: ExperimentoModeloApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	editaCampanha(edicao) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(CampanhaAdsExperimentoEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.principal
			}
		});

	}



	editaEvolucao(edicao) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(EvolucaoExperimentoEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.principal
			}
		});

	}

	getFiltro() {
		return {
			'include' : [
				'evolucaoExperimentos',
				'campanhaAdsExperimentos'
			]
		}
	}
}
