import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CampanhaAdsRedeDisplayApi, ProdutoProprio } from '../shared/sdk';
import { CampanhaAdsRedeDisplayProdutoProprioListBaseComponent } from './campanha-ads-rede-display-produto-proprio-list-base.component';
import { CampanhaAdsRedeDisplayProdutoProprioEditComponent } from '../campanha-ads-rede-display-produto-proprio-edit/campanha-ads-rede-display-produto-proprio-edit.component';

@Component({
	selector: 'app-campanha-ads-rede-display-produto-proprio-list',
  	templateUrl: './campanha-ads-rede-display-produto-proprio-list.component.html',
  	styleUrls: ['./campanha-ads-rede-display-produto-proprio-list.component.css']
})
export class CampanhaAdsRedeDisplayProdutoProprioListComponent extends CampanhaAdsRedeDisplayProdutoProprioListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: CampanhaAdsRedeDisplayApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
			'include' : ['publicoAlvoAdsPalavra','imagemConjunto','anuncioConceitoAdsRedeDisplay','paginaVendaVsl','contaGoogle']
		};
		console.log('filtro-produto:' , filtro);
		return filtro;
	}

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(CampanhaAdsRedeDisplayProdutoProprioEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.produto
			}
		});
	}
}
