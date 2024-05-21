import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DalleSolicitacaoImagemApi, ProdutoProprio } from '../shared/sdk';
import { DalleSolicitacaoImagemProdutoProprioListBaseComponent } from './dalle-solicitacao-imagem-produto-proprio-list-base.component';

@Component({
	selector: 'app-dalle-solicitacao-imagem-produto-proprio-list',
  	templateUrl: './dalle-solicitacao-imagem-produto-proprio-list.component.html',
  	styleUrls: ['./dalle-solicitacao-imagem-produto-proprio-list.component.css']
})
export class DalleSolicitacaoImagemProdutoProprioListComponent extends DalleSolicitacaoImagemProdutoProprioListBaseComponent {

	@Input() produto: ProdutoProprio | null;

	constructor(protected srv: DalleSolicitacaoImagemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	pronto(item) {
		this.srv.InverteEnviar(item.id)
			.subscribe((result) => {
				this.carregaTela();
			})
	}
	
	getFiltro() {
		console.log('produto:' , this.produto);
		return {'where' : {'produtoProprioId' : this.produto.id} , 'order' : 'id desc'}
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
