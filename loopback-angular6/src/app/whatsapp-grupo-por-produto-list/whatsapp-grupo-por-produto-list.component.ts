import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoProprio, WhatsappGrupoApi } from '../shared/sdk';
import { WhatsappGrupoPorProdutoListBaseComponent } from './whatsapp-grupo-por-produto-list-base.component';

@Component({
	selector: 'app-whatsapp-grupo-por-produto-list',
  	templateUrl: './whatsapp-grupo-por-produto-list.component.html',
  	styleUrls: ['./whatsapp-grupo-por-produto-list.component.css']
})
export class WhatsappGrupoPorProdutoListComponent extends WhatsappGrupoPorProdutoListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: WhatsappGrupoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}



	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
			'include' : 'checkoutProdutoProprio'
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
