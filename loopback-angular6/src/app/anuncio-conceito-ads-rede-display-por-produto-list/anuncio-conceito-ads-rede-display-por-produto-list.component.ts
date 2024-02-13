import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AnuncioConceitoAdsRedeDisplayApi, CampanhaAdsMetricaIntraday, ProdutoAfiliadoHotmart, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { AnuncioConceitoAdsRedeDisplayPorProdutoListBaseComponent } from './anuncio-conceito-ads-rede-display-por-produto-list-base.component';
import { AnuncioConceitoAdsRedeDisplay } from '../shared/sdk/models/AnuncioConceitoAdsRedeDisplay';

@Component({
	selector: 'app-anuncio-conceito-ads-rede-display-por-produto-list',
  	templateUrl: './anuncio-conceito-ads-rede-display-por-produto-list.component.html',
  	styleUrls: ['./anuncio-conceito-ads-rede-display-por-produto-list.component.css']
})
export class AnuncioConceitoAdsRedeDisplayPorProdutoListComponent extends AnuncioConceitoAdsRedeDisplayPorProdutoListBaseComponent {

	produtoAfiliado: ProdutoAfiliadoHotmart;

	constructor(protected srv: AnuncioConceitoAdsRedeDisplayApi, 
			private srvAfiliado: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	carregaTela() {
		this.router.params.subscribe((params) => {
			let hotmartId = params['id'];

			let filtro = {
				'where' : {'hotmartId' : hotmartId},
				'include' : 'anuncioConceitoAdsRedeDisplays' 
			}

			this.srvAfiliado.findOne(filtro)
	 			.subscribe((result: ProdutoAfiliadoHotmart) => {
					console.log('result-historico: ' , result);
					this.produtoAfiliado = result;
				})
		})
	}


}
