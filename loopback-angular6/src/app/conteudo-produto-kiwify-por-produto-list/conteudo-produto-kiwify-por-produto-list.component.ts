import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConteudoProdutoKiwifyApi, ProdutoProprio } from '../shared/sdk';
import { ConteudoProdutoKiwifyPorProdutoListBaseComponent } from './conteudo-produto-kiwify-por-produto-list-base.component';
import { ConteudoProdutoKiwifyEditComponent } from '../conteudo-produto-kiwify-edit/conteudo-produto-kiwify-edit.component';

@Component({
	selector: 'app-conteudo-produto-kiwify-por-produto-list',
  	templateUrl: './conteudo-produto-kiwify-por-produto-list.component.html',
  	styleUrls: ['./conteudo-produto-kiwify-por-produto-list.component.css']
})
export class ConteudoProdutoKiwifyPorProdutoListComponent extends ConteudoProdutoKiwifyPorProdutoListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: ConteudoProdutoKiwifyApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}



	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id}
		};
		console.log('filtro-produto:' , filtro);
		return filtro;
	}


	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(ConteudoProdutoKiwifyEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.produto
			}
		});
	}

}
