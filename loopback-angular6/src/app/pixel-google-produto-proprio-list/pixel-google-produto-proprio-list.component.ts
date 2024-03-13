import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PixelGoogleApi, ProdutoProprio } from '../shared/sdk';
import { PixelGoogleProdutoProprioListBaseComponent } from './pixel-google-produto-proprio-list-base.component';

@Component({
	selector: 'app-pixel-google-produto-proprio-list',
  	templateUrl: './pixel-google-produto-proprio-list.component.html',
  	styleUrls: ['./pixel-google-produto-proprio-list.component.css']
})
export class PixelGoogleProdutoProprioListComponent extends PixelGoogleProdutoProprioListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: PixelGoogleApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}


	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
			'include' : ['contaGoogle']
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
