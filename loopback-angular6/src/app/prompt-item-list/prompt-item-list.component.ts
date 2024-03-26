import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoProprio, PromptItemApi } from '../shared/sdk';
import { PromptItemListBaseComponent } from './prompt-item-list-base.component';

@Component({
	selector: 'app-prompt-item-list',
  	templateUrl: './prompt-item-list.component.html',
  	styleUrls: ['./prompt-item-list.component.css']
})
export class PromptItemListComponent extends PromptItemListBaseComponent {


	@Input() produto: ProdutoProprio;

	constructor(protected srv: PromptItemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
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
