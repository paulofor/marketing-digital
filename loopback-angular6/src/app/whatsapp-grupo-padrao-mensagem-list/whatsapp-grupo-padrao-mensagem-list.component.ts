import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProdutoProprio, WhatsappGrupoPadraoMensagemApi } from '../shared/sdk';
import { WhatsappGrupoPadraoMensagemListBaseComponent } from './whatsapp-grupo-padrao-mensagem-list-base.component';

@Component({
	selector: 'app-whatsapp-grupo-padrao-mensagem-list',
  	templateUrl: './whatsapp-grupo-padrao-mensagem-list.component.html',
  	styleUrls: ['./whatsapp-grupo-padrao-mensagem-list.component.css']
})
export class WhatsappGrupoPadraoMensagemListComponent extends WhatsappGrupoPadraoMensagemListBaseComponent {

	@Input() produto: ProdutoProprio;

	constructor(protected srv: WhatsappGrupoPadraoMensagemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro() {
		let filtro =  {
			'where' : {'produtoProprioId' : this.produto.id}
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
