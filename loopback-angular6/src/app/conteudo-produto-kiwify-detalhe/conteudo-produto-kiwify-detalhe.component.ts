import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConteudoProdutoKiwify, ConteudoProdutoKiwifyApi } from '../shared/sdk';
import { ConteudoProdutoKiwifyDetalheBaseComponent } from './conteudo-produto-kiwify-detalhe-base.component';
import { ConteudoProdutoKiwifyEditComponent } from '../conteudo-produto-kiwify-edit/conteudo-produto-kiwify-edit.component';
import { ItemConteudoProdutoEditComponent } from '../item-conteudo-produto-edit/item-conteudo-produto-edit.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
	selector: 'app-conteudo-produto-kiwify-detalhe',
  	templateUrl: './conteudo-produto-kiwify-detalhe.component.html',
  	styleUrls: ['./conteudo-produto-kiwify-detalhe.component.css']
})
export class ConteudoProdutoKiwifyDetalheComponent extends ConteudoProdutoKiwifyDetalheBaseComponent {

	constructor(protected srv: ConteudoProdutoKiwifyApi, protected router: ActivatedRoute, protected dialog: MatDialog,
		private sanitizer: DomSanitizer) { 
		super(srv,router,dialog);
	}

	carregaTela() {
		this.router.params.subscribe((params) => {
		let idPrincipal = params['idPrincipal'];
		let ordenacao = params['ordenacao'];
		let filtro = {
			'where' : {'and' : [{'ordenacao' : ordenacao},{'entregavelProdutoId' : idPrincipal}]},
			'include' : {'relation' : 'itemConteudoProdutos' , 'scope' : {
				'include' : 'promptItem', 'order' : 'ordenacao'
				
			}}
		}
		this.srv.findOne(filtro)
	 		.subscribe((result: ConteudoProdutoKiwify) => {
				this.principal = result;
				console.log('principal:', this.principal);
            	this.posCarregaTela();
			})
		})
	}



	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao
			}
		});
	}
	getComponente() : any {
		return ItemConteudoProdutoEditComponent;
	}

	ajustaTexto(texto: string): SafeHtml {
		// Substitui as quebras de linha por <br>
		const textoFormatado = texto.replace(/\n/g, '<br/>');
		// Retorna o texto formatado como HTML seguro
		return this.sanitizer.bypassSecurityTrustHtml(textoFormatado);
	}

	ajustaComPre(texto:string) {
		const textoFormatado = texto.replace(/\n/g,'<br/>');
		return textoFormatado
	}
}
