import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsRedeDisplayApi, ProdutoAfiliadoHotmart, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { CampanhaAdsRedeDisplayPorProdutoListBaseComponent } from './campanha-ads-rede-display-por-produto-list-base.component';

@Component({
	selector: 'app-campanha-ads-rede-display-por-produto-list',
  	templateUrl: './campanha-ads-rede-display-por-produto-list.component.html',
  	styleUrls: ['./campanha-ads-rede-display-por-produto-list.component.css']
})
export class CampanhaAdsRedeDisplayPorProdutoListComponent extends CampanhaAdsRedeDisplayPorProdutoListBaseComponent {


	produtoAfiliado: ProdutoAfiliadoHotmart;

	constructor(protected srv: CampanhaAdsRedeDisplayApi, protected router: ActivatedRoute, protected dialog: MatDialog, 
		private srvAfiliado:ProdutoAfiliadoHotmartApi) { 
		super(srv,router,dialog);
	}
	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao,
				origem: this.produtoAfiliado
			}
		});
	}

	carregaTela() {
		this.router.params.subscribe((params) => {
			let hotmartId = params['id'];

			let filtro = {
				'include' : {
					'relation' : 'campanhaAdsRedeDisplays' , 
					'scope' : { 'include': [
						'paginaVendaPropria' ,
						'publicoAlvoAdsPalavra',
						'anuncioConceitoAdsRedeDisplay',
						'imagemConjunto',
						'contaGoogle'
					] }  
				} 
			}

			this.srvAfiliado.findById(hotmartId, filtro)
	 			.subscribe((result: ProdutoAfiliadoHotmart) => {
					console.log('result-produto com campanhas: ' , result);
					this.produtoAfiliado = result;
				})
		})
	}

}
