import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AnuncioConceitoAdsRedeDisplayApi, ProdutoProprio } from '../shared/sdk';
import { AnuncioConceitoAdsRedeDisplayProdutoProprioListBaseComponent } from './anuncio-conceito-ads-rede-display-produto-proprio-list-base.component';

@Component({
	selector: 'app-anuncio-conceito-ads-rede-display-produto-proprio-list',
  	templateUrl: './anuncio-conceito-ads-rede-display-produto-proprio-list.component.html',
  	styleUrls: ['./anuncio-conceito-ads-rede-display-produto-proprio-list.component.css']
})
export class AnuncioConceitoAdsRedeDisplayProdutoProprioListComponent extends AnuncioConceitoAdsRedeDisplayProdutoProprioListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: AnuncioConceitoAdsRedeDisplayApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		let filtro =  {'where' : {'produtoProprioId' : this.produto.id}};
		console.log('filtro-produto:' , filtro);
		return filtro;
	}

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao,
				origem: this.produto
			}
		});
	}

}
