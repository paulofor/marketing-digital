import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsTesteApi } from '../shared/sdk';
import { CampanhaAdsTesteListAtivaMetricaBaseComponent } from './campanha-ads-teste-list-ativa-metrica-base.component';

@Component({
	selector: 'app-campanha-ads-teste-list-ativa-metrica',
  	templateUrl: './campanha-ads-teste-list-ativa-metrica.component.html',
  	styleUrls: ['./campanha-ads-teste-list-ativa-metrica.component.css']
})
export class CampanhaAdsTesteListAtivaMetricaComponent extends CampanhaAdsTesteListAtivaMetricaBaseComponent {

	constructor(protected srv: CampanhaAdsTesteApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'where' : {'ativa' : 1},
			'include' : [
				{'relation' : 'campanhaAdsMetricas' , 'scope' : {'order' : 'dataHora desc' , 'limit' : 10}},
				{'relation' : 'produtoAfiliadoHotmart', 'scope' : {'include' : {'relation' : 'visitaProdutoHotmarts' , 'scope' : {
					'where' : {'maisRecente' : 1},
					'include' : 'ideiaPalavraChave'
				}}}}
			]
		}
	}

}
