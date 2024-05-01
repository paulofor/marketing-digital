import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappMensagemTextoApi } from '../shared/sdk';
import { WhatsappMensagemTextoListPorGrupoSimplesBaseComponent } from './whatsapp-mensagem-texto-list-por-grupo-simples-base.component';

@Component({
	selector: 'app-whatsapp-mensagem-texto-list-por-grupo-simples',
  	templateUrl: './whatsapp-mensagem-texto-list-por-grupo-simples.component.html',
  	styleUrls: ['./whatsapp-mensagem-texto-list-por-grupo-simples.component.css']
})
export class WhatsappMensagemTextoListPorGrupoSimplesComponent extends WhatsappMensagemTextoListPorGrupoSimplesBaseComponent {

	constructor(protected srv: WhatsappMensagemTextoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
