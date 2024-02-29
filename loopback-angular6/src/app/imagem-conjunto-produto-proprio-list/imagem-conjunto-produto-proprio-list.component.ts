import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ImagemConjuntoApi, ProdutoProprio } from '../shared/sdk';
import { ImagemConjuntoProdutoProprioListBaseComponent } from './imagem-conjunto-produto-proprio-list-base.component';

@Component({
	selector: 'app-imagem-conjunto-produto-proprio-list',
  	templateUrl: './imagem-conjunto-produto-proprio-list.component.html',
  	styleUrls: ['./imagem-conjunto-produto-proprio-list.component.css']
})
export class ImagemConjuntoProdutoProprioListComponent extends ImagemConjuntoProdutoProprioListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: ImagemConjuntoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
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
