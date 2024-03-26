import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { EntregavelProdutoApi, ProdutoProprio } from '../shared/sdk';
import { EntregavelProdutoListBaseComponent } from './entregavel-produto-list-base.component';

@Component({
	selector: 'app-entregavel-produto-list',
  	templateUrl: './entregavel-produto-list.component.html',
  	styleUrls: ['./entregavel-produto-list.component.css']
})
export class EntregavelProdutoListComponent extends EntregavelProdutoListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: EntregavelProdutoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}




	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id}
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
