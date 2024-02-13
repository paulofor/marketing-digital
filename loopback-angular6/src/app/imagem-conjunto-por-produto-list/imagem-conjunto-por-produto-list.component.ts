import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ImagemConjuntoApi, ProdutoAfiliadoHotmart, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { ImagemConjuntoPorProdutoListBaseComponent } from './imagem-conjunto-por-produto-list-base.component';

@Component({
	selector: 'app-imagem-conjunto-por-produto-list',
  	templateUrl: './imagem-conjunto-por-produto-list.component.html',
  	styleUrls: ['./imagem-conjunto-por-produto-list.component.css']
})
export class ImagemConjuntoPorProdutoListComponent extends ImagemConjuntoPorProdutoListBaseComponent {

	produtoAfiliado: ProdutoAfiliadoHotmart;

	constructor(private srvAfiliado: ProdutoAfiliadoHotmartApi, protected srv: ImagemConjuntoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	editaItem(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao,
				origem: this.produtoAfiliado
			}
		});
	}

	carregaTela() {
		this.router.params.subscribe((params) => {
			let hotmartId = params['id'];

			let filtro = {
				'where' : {'hotmartId' : hotmartId},
				'include' : 'imagemConjuntos' 
			}

			this.srvAfiliado.findOne(filtro)
	 			.subscribe((result: ProdutoAfiliadoHotmart) => {
					console.log('result-historico: ' , result);
					this.produtoAfiliado = result;
				})
		})
	}
}
