import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PublicoAlvoAdsPalavraApi } from '../shared/sdk';
import { PublicoAlvoAdsPalavraProdutoProprioListBaseComponent } from './publico-alvo-ads-palavra-produto-proprio-list-base.component';
import { ProdutoProprio } from '../shared/sdk/models/ProdutoProprio';

@Component({
	selector: 'app-publico-alvo-ads-palavra-produto-proprio-list',
  	templateUrl: './publico-alvo-ads-palavra-produto-proprio-list.component.html',
  	styleUrls: ['./publico-alvo-ads-palavra-produto-proprio-list.component.css']
})
export class PublicoAlvoAdsPalavraProdutoProprioListComponent extends PublicoAlvoAdsPalavraProdutoProprioListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: PublicoAlvoAdsPalavraApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}



	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
			'include' : 'contaGoogle'
		};
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
