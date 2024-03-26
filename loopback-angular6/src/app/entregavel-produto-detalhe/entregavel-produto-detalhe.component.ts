import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConteudoProdutoKiwifyApi, EntregavelProdutoApi, ImagemConjuntoApi, ImagemConteudoApi } from '../shared/sdk';
import { EntregavelProdutoDetalheBaseComponent } from './entregavel-produto-detalhe-base.component';
import { ConteudoProdutoKiwifyEditComponent } from '../conteudo-produto-kiwify-edit/conteudo-produto-kiwify-edit.component';
import { PromptImagemConteudoEditComponent } from '../prompt-imagem-conteudo-edit/prompt-imagem-conteudo-edit.component';


@Component({
	selector: 'app-entregavel-produto-detalhe',
  	templateUrl: './entregavel-produto-detalhe.component.html',
  	styleUrls: ['./entregavel-produto-detalhe.component.css']
})
export class EntregavelProdutoDetalheComponent extends EntregavelProdutoDetalheBaseComponent {

	constructor(protected srv: EntregavelProdutoApi, protected router: ActivatedRoute, protected dialog: MatDialog, 
		private srvConteudo:ConteudoProdutoKiwifyApi, private srvImagem:ImagemConteudoApi) { 
		super(srv,router,dialog);
	}

	ordenacao() {
		this.srvConteudo.OrdenacaoAlfabetica(this.principal.id)
			.subscribe((result) => {
				this.carregaTela();
			})
	}

	marcarPrincipal(item) {
		this.srvImagem.LigaPrincipal(item.id)
			.subscribe((result) => {
				this.carregaTela();
			})
	}


	getFiltro() {
		let filtro = {
			'include' : [
				{'relation' : 'conteudoProdutoKiwifys', 'scope' : 
					{'order' : 'ordenacao', 'include' : 'imagemConteudos'},
				},
				'produtoProprio',
				'promptImagemConteudos'
			]
		};
		return filtro;
	}


	

	editaPrompt(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(PromptImagemConteudoEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.principal
			}
		});
	}

	editaModulo(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao,
				origem: this.principal
			}
		});
	}
	getComponente() : any {
		return ConteudoProdutoKiwifyEditComponent;
	}
}
