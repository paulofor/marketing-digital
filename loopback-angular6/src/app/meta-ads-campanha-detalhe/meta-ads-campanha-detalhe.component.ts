import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsCampanhaApi, MetaAdsConjuntoAnuncio } from '../shared/sdk';
import { MetaAdsCampanhaDetalheBaseComponent } from './meta-ads-campanha-detalhe-base.component';
import { MetaAdsConjuntoAnuncioEditComponent } from '../meta-ads-conjunto-anuncio-edit/meta-ads-conjunto-anuncio-edit.component';
import { MetaAdsAnuncioEditComponent } from '../meta-ads-anuncio-edit/meta-ads-anuncio-edit.component';

@Component({
	selector: 'app-meta-ads-campanha-detalhe',
  	templateUrl: './meta-ads-campanha-detalhe.component.html',
  	styleUrls: ['./meta-ads-campanha-detalhe.component.css']
})
export class MetaAdsCampanhaDetalheComponent extends MetaAdsCampanhaDetalheBaseComponent {

	constructor(protected srv: MetaAdsCampanhaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro()  {
		const filtro = {'include' : {'relation' : 'metaAdsConjuntoAnuncios', 'scope' : 
			{'include' : {'relation' : 'metaAdsAnuncios' , 'scope' : {
				'include' : ['paginaVendaAberta' , 'criativoAnuncio']
			}}}}
		};
		return filtro;
	}

	editaConjunto(item) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(MetaAdsConjuntoAnuncioEditComponent, {
			width: '800px',
			data: {
				item: item,
				origem: this.principal
			}
		});
	}

	
}
