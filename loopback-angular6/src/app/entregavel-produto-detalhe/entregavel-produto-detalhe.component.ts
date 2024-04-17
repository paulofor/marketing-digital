import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConteudoProdutoKiwifyApi, EntregavelProduto, EntregavelProdutoApi, ImagemConjuntoApi, ImagemConteudoApi, ItemConteudoProdutoApi } from '../shared/sdk';
import { EntregavelProdutoDetalheBaseComponent } from './entregavel-produto-detalhe-base.component';
import { ConteudoProdutoKiwifyEditComponent } from '../conteudo-produto-kiwify-edit/conteudo-produto-kiwify-edit.component';
import { PromptImagemConteudoEditComponent } from '../prompt-imagem-conteudo-edit/prompt-imagem-conteudo-edit.component';
import { PromptItemEditComponent } from '../prompt-item-edit/prompt-item-edit.component';
import { ConfirmaExclusaoComponent } from '../confirma-exclusao/confirma-exclusao.component';


@Component({
	selector: 'app-entregavel-produto-detalhe',
  	templateUrl: './entregavel-produto-detalhe.component.html',
  	styleUrls: ['./entregavel-produto-detalhe.component.css']
})
export class EntregavelProdutoDetalheComponent extends EntregavelProdutoDetalheBaseComponent {

	constructor(protected srv: EntregavelProdutoApi, protected router: ActivatedRoute, protected dialog: MatDialog, 
		private srvConteudo:ConteudoProdutoKiwifyApi, private srvItemConteudo:ItemConteudoProdutoApi, private srvImagem:ImagemConteudoApi) { 
		super(srv,router,dialog);
	} 
	
	

	faltaImagem : number;

	posCarregaTela(): void {
		this.faltaImagem = 0;
		for (let i=0;i<this.principal.conteudoProdutoKiwifys.length;i++) {
			if (this.principal.conteudoProdutoKiwifys[i].geraImagem == 1) this.faltaImagem++;
		}
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

	ajustaGeraImagem() {
		this.srvConteudo.AjustaGeraImagem(this.principal.id)
			.subscribe((result) => {
				this.carregaTela();
			})

	}
	
	somenteGeraImagem() {
		this.srv.findById(this.idPrincipal, this.getFiltroGeraImagem())
		.subscribe((result: EntregavelProduto) => {
		   this.principal = result;
		   console.log('principal:', this.principal);
		   this.posCarregaTela();
	   })
	}

	geraTexto(valor) {
		this.srvConteudo.BatchGeraTexto(this.principal.id,valor)
			.subscribe((result) => {
				this.carregaTela();
			})
	}

	ajustaOrdenacao() {
		this.srvItemConteudo.OrdenacaoAlfabetica(this.principal.id)
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
				'promptImagemConteudos',
				{'relation' : 'promptItems' , 'scope' : {'order' : 'ordenacao'} }
			]
		};
		return filtro;
	}

	getFiltroGeraImagem() {
		let filtro = {
			
			'include' : [
				{'relation' : 'conteudoProdutoKiwifys', 'scope' : 
					{'order' : 'ordenacao', 'include' : 'imagemConteudos', 'where' : {'geraImagem' : 1}},
				},
				'produtoProprio',
				'promptImagemConteudos'
			]
		};
		return filtro;
	}

	editaPromptItem(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(PromptItemEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.principal
			}
		});
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
	
	excluiModulo(item: any) {
		const dialogRef = this.dialog.open(ConfirmaExclusaoComponent);
		dialogRef.afterClosed().subscribe(result => {
		  if (result) {
			console.log('Excluir:', item);
			this.srvConteudo.deleteById(item.id)
				.subscribe((result) => {
					this.carregaTela();
				})
		  }
		});
	}


	getComponente() : any {
		return ConteudoProdutoKiwifyEditComponent;
	}
}
