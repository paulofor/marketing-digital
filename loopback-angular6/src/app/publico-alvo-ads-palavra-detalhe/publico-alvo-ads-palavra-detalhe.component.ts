import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PublicoAlvoAdsPalavraApi } from '../shared/sdk';
import { PublicoAlvoAdsPalavraDetalheBaseComponent } from './publico-alvo-ads-palavra-detalhe-base.component';
import { ContaPublicoAlvoAdsPalavraEditRelComponent } from '../conta-publico-alvo-ads-palavra-edit-rel/conta-publico-alvo-ads-palavra-edit-rel.component';

@Component({
	selector: 'app-publico-alvo-ads-palavra-detalhe',
  	templateUrl: './publico-alvo-ads-palavra-detalhe.component.html',
  	styleUrls: ['./publico-alvo-ads-palavra-detalhe.component.css']
})
export class PublicoAlvoAdsPalavraDetalheComponent extends PublicoAlvoAdsPalavraDetalheBaseComponent {

	constructor(protected srv: PublicoAlvoAdsPalavraApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		return {
			'include' : {'relation': 'contaPublicoAlvoAdsPalavras' , 'scope' : {
				'include' : 'contaGoogle'
			}}
		}
	}

	editaConta() {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(ContaPublicoAlvoAdsPalavraEditRelComponent, {
			width: '800px',
			data: {
				origem: this.principal
			}
		});
	}
}
