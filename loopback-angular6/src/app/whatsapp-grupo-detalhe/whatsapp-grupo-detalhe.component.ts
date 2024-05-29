import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WhatsappGrupoApi, WhatsappMensagemEnviadaGrupoApi } from '../shared/sdk';
import { WhatsappGrupoDetalheBaseComponent } from './whatsapp-grupo-detalhe-base.component';
import { WhatsappMensagemEnviadaGrupoEditComponent } from '../whatsapp-mensagem-enviada-grupo-edit/whatsapp-mensagem-enviada-grupo-edit.component';
import { WhatsappMensagemEnviadaGrupo } from '../shared/sdk/models/WhatsappMensagemEnviadaGrupo';

@Component({
	selector: 'app-whatsapp-grupo-detalhe',
  	templateUrl: './whatsapp-grupo-detalhe.component.html',
  	styleUrls: ['./whatsapp-grupo-detalhe.component.css']
})
export class WhatsappGrupoDetalheComponent extends WhatsappGrupoDetalheBaseComponent {

	listaMensagem:WhatsappMensagemEnviadaGrupo[];

	constructor(protected srv: WhatsappGrupoApi, protected router: ActivatedRoute, protected dialog: MatDialog, 
		private srvTexto:WhatsappMensagemEnviadaGrupoApi) { 
		super(srv,router,dialog);
	}

	posCarregaTela(): void {
		let filtro = {'where' : {'and' : [{'whatsappGrupoId' : this.principal.id}]}}
		this.srvTexto.find(filtro)
			.subscribe((result:WhatsappMensagemEnviadaGrupo[]) => {
				this.listaMensagem = result;
			})	
	}

	editaMensagem(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao,
				origem: this.principal
			}
		});
	}
	getComponente() : any {
		return WhatsappMensagemEnviadaGrupoEditComponent;
	}
}
