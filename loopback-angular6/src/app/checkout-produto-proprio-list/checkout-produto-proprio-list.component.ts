import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CheckoutProdutoProprioApi } from '../shared/sdk';
import { CheckoutProdutoProprioListBaseComponent } from './checkout-produto-proprio-list-base.component';
import { ProdutoProprio } from '../shared/sdk/models/ProdutoProprio';

@Component({
	selector: 'app-checkout-produto-proprio-list',
  	templateUrl: './checkout-produto-proprio-list.component.html',
  	styleUrls: ['./checkout-produto-proprio-list.component.css']
})
export class CheckoutProdutoProprioListComponent extends CheckoutProdutoProprioListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: CheckoutProdutoProprioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

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

	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id},
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
