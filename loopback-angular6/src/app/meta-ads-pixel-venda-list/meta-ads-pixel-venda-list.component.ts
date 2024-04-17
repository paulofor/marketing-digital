import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsPixelVendaApi, ProdutoProprio } from '../shared/sdk';
import { MetaAdsPixelVendaListBaseComponent } from './meta-ads-pixel-venda-list-base.component';
import { MetaAdsPixelVendaEditComponent } from '../meta-ads-pixel-venda-edit/meta-ads-pixel-venda-edit.component';

@Component({
	selector: 'app-meta-ads-pixel-venda-list',
  	templateUrl: './meta-ads-pixel-venda-list.component.html',
  	styleUrls: ['./meta-ads-pixel-venda-list.component.css']
})
export class MetaAdsPixelVendaListComponent extends MetaAdsPixelVendaListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: MetaAdsPixelVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id}
		};
		console.log('filtro-pagina:' , filtro);
		return filtro;
	}

	edita(item) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(MetaAdsPixelVendaEditComponent, {
			width: '800px',
			data: {
				item: item,
				origem: this.produto
			}
		});
	}



}
