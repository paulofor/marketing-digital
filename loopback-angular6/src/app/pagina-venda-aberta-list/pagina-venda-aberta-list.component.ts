import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaVendaAbertaApi } from '../shared/sdk';
import { PaginaVendaAbertaListBaseComponent } from './pagina-venda-aberta-list-base.component';
import { ProdutoProprio } from '../shared/sdk/models/ProdutoProprio';

@Component({
	selector: 'app-pagina-venda-aberta-list',
  	templateUrl: './pagina-venda-aberta-list.component.html',
  	styleUrls: ['./pagina-venda-aberta-list.component.css']
})
export class PaginaVendaAbertaListComponent extends PaginaVendaAbertaListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: PaginaVendaAbertaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
			'include' : ['checkoutProdutoProprio','estruturaPaginaVendaAberta']
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
