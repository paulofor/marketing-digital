import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CheckoutProdutoProprioApi } from '../shared/sdk';
import { CheckoutProdutoProprioListBaseComponent } from './checkout-produto-proprio-list-base.component';
import { ProdutoProprio } from '../shared/sdk/models/ProdutoProprio';

@Component({
	selector: 'app-checkout-produto-proprio-list',
  	templateUrl: './checkout-produto-proprio-list.component.html',
  	styleUrls: ['./checkout-produto-proprio-list.component.css']
})
export class CheckoutProdutoProprioListComponent extends CheckoutProdutoProprioListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: CheckoutProdutoProprioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}



	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
		};
		console.log('filtro-pagina:' , filtro);
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
