import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappMensagemTextoApi } from '../shared/sdk';
import { WhatsappMensagemTextoListPorDiaBaseComponent } from './whatsapp-mensagem-texto-list-por-dia-base.component';

@Component({
	selector: 'app-whatsapp-mensagem-texto-list-por-dia',
  	templateUrl: './whatsapp-mensagem-texto-list-por-dia.component.html',
  	styleUrls: ['./whatsapp-mensagem-texto-list-por-dia.component.css']
})
export class WhatsappMensagemTextoListPorDiaComponent extends WhatsappMensagemTextoListPorDiaBaseComponent {

	constructor(protected srv: WhatsappMensagemTextoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
