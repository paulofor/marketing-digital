import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappMensagemApi } from '../shared/sdk';
import { WhatsappMensagemPorGrupoListBaseComponent } from './whatsapp-mensagem-por-grupo-list-base.component';

@Component({
	selector: 'app-whatsapp-mensagem-por-grupo-list',
  	templateUrl: './whatsapp-mensagem-por-grupo-list.component.html',
  	styleUrls: ['./whatsapp-mensagem-por-grupo-list.component.css']
})
export class WhatsappMensagemPorGrupoListComponent extends WhatsappMensagemPorGrupoListBaseComponent {

	constructor(protected srv: WhatsappMensagemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
