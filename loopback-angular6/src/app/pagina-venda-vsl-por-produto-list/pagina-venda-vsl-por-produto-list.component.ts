import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PaginaVendaVslApi, ProdutoProprio } from '../shared/sdk';
import { PaginaVendaVslPorProdutoListBaseComponent } from './pagina-venda-vsl-por-produto-list-base.component';

@Component({
	selector: 'app-pagina-venda-vsl-por-produto-list',
  	templateUrl: './pagina-venda-vsl-por-produto-list.component.html',
  	styleUrls: ['./pagina-venda-vsl-por-produto-list.component.css']
})
export class PaginaVendaVslPorProdutoListComponent extends PaginaVendaVslPorProdutoListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: PaginaVendaVslApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}
	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
			'include' : ['modeloPaginaVendaVsl' , 'videoVsl']
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
