import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsCampanhaApi, ProdutoProprio } from '../shared/sdk';
import { MetaAdsCampanhaListBaseComponent } from './meta-ads-campanha-list-base.component';

@Component({
	selector: 'app-meta-ads-campanha-list',
  	templateUrl: './meta-ads-campanha-list.component.html',
  	styleUrls: ['./meta-ads-campanha-list.component.css']
})
export class MetaAdsCampanhaListComponent extends MetaAdsCampanhaListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: MetaAdsCampanhaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
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
