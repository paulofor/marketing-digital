import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappGrupoPadraoMensagemApi } from '../shared/sdk';
import { WhatsappGrupoPadraoMensagemDetalheBaseComponent } from './whatsapp-grupo-padrao-mensagem-detalhe-base.component';
import { WhatsappGrupoDiaAgendaEditComponent } from '../whatsapp-grupo-dia-agenda-edit/whatsapp-grupo-dia-agenda-edit.component';
import { WhatsappModeloMensagemEditComponent } from '../whatsapp-modelo-mensagem-edit/whatsapp-modelo-mensagem-edit.component';

@Component({
	selector: 'app-whatsapp-grupo-padrao-mensagem-detalhe',
  	templateUrl: './whatsapp-grupo-padrao-mensagem-detalhe.component.html',
  	styleUrls: ['./whatsapp-grupo-padrao-mensagem-detalhe.component.css']
})
export class WhatsappGrupoPadraoMensagemDetalheComponent extends WhatsappGrupoPadraoMensagemDetalheBaseComponent {

	constructor(protected srv: WhatsappGrupoPadraoMensagemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro(): {} {
		return {
			'include' : {'relation' : 'whatsappGrupoDiaAgendas' , 'scope' : {
				'order' : 'dia',
				'include' : {'relation' : 'whatsappModeloMensagems' , 'scope' : {
					'order' : 'ordenacao'
				}}
			}}
		}
	}

	editaMensagem(dia,edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(WhatsappModeloMensagemEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: dia
			}
		});
	}

	editaDia(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(WhatsappGrupoDiaAgendaEditComponent, {
			width: '800px',
			data: {
				item: edicao,
				origem: this.principal
			}
		});
	}
}
