import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappMensagemEnviadaGrupoApi } from '../shared/sdk';
import { WhatsappMensagemEnviadaGrupoListBaseComponent } from './whatsapp-mensagem-enviada-grupo-list-base.component';

@Component({
	selector: 'app-whatsapp-mensagem-enviada-grupo-list',
  	templateUrl: './whatsapp-mensagem-enviada-grupo-list.component.html',
  	styleUrls: ['./whatsapp-mensagem-enviada-grupo-list.component.css']
})
export class WhatsappMensagemEnviadaGrupoListComponent extends WhatsappMensagemEnviadaGrupoListBaseComponent {

	constructor(protected srv: WhatsappMensagemEnviadaGrupoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
