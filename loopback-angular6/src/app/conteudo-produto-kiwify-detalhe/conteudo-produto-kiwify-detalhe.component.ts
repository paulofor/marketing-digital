import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConteudoProdutoKiwify, ConteudoProdutoKiwifyApi, PromptItem } from '../shared/sdk';
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

		let textoFormatado = texto.replace(/\n/g, '<br/>');
		
		// Retorna o texto formatado como HTML seguro
		return this.sanitizer.bypassSecurityTrustHtml(textoFormatado);
	}

	negritarTrechos(texto: string, textoInicio: string, textoFinal: string): string {
		// Verificar se textoFinal é um caractere de nova linha
		const isNewLineFinal = textoFinal === '\n';
	
		// Criar uma expressão regular que captura o texto entre textoInicio e textoFinal
		const regex = new RegExp(`${textoInicio}(.*?)${textoFinal}`, 'g');
	
		// Substituir os trechos encontrados pela versão envolvida com <b> e </b>
		const resultado = texto.replace(regex, (match, p1) => {
			if (isNewLineFinal) {
				// Se textoFinal é '\n', mantemos o final e adicionamos <b> ao texto capturado
				return `<b>${p1}${textoFinal}</b><br>`;
			} else {
				// Caso contrário, removemos textoInicio e textoFinal e adicionamos <b> ao texto capturado
				return `<b>${p1}</b>`;
			}
		});
	
		return resultado;
	}
	@ViewChild('conteudoPre') conteudoPre: ElementRef;

	copiaItem(textoParaCopiar): void {
		// Cria um elemento textarea
		const campoTemp = document.createElement('textarea');
		
		// Define o valor do textarea como o texto a ser copiado
		campoTemp.value = textoParaCopiar;
		
		// Adiciona o textarea ao corpo do documento
		document.body.appendChild(campoTemp);
		
		// Seleciona todo o texto no textarea
		campoTemp.select();
		
		// Copia o texto selecionado para a área de transferência do sistema
		document.execCommand('copy');
		
		// Remove o textarea do documento
		document.body.removeChild(campoTemp);
		
		// Exibe uma mensagem de confirmação
		alert('Texto copiado para a área de transferência!');
	}

	copiarConteudo(): void {
		// Obtém o texto do elemento <pre>
		const texto = this.conteudoPre.nativeElement.innerText;
	
		// Cria um campo de texto temporário
		const campoTemp = document.createElement('textarea');
		campoTemp.value = texto;
		
		// Adiciona o campo de texto ao corpo do documento
		document.body.appendChild(campoTemp);
		
		// Seleciona todo o texto no campo de texto
		campoTemp.select();
		
		// Copia o texto selecionado para a área de transferência do sistema
		document.execCommand('copy');
		
		// Remove o campo de texto temporário
		document.body.removeChild(campoTemp);
		
		// Exibe uma mensagem de confirmação
		alert('Conteúdo copiado para a área de transferência!');
	  }

	ajustaComPre(texto:string, prompt:PromptItem) {
		console.log('prompt:' , prompt);
		let textoFormatado = this.negritarTrechos(texto,prompt.textoInicioNegrito, prompt.textoFinalNegrito);
		textoFormatado = textoFormatado.replace(/\n/g,'<br/>');
		return textoFormatado
	}
}
