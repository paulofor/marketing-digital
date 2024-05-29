import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WhatsappMensagemEnviadaGrupoApi } from '../shared/sdk';
import { WhatsappMensagemEnviadaGrupoEditBaseComponent } from './whatsapp-mensagem-enviada-grupo-edit-base.component';
import { WhatsappMensagemEnviadaGrupo } from '../shared/sdk/models/WhatsappMensagemEnviadaGrupo';

@Component({
	selector: 'app-whatsapp-mensagem-enviada-grupo-edit',
  	templateUrl: './whatsapp-mensagem-enviada-grupo-edit.component.html',
  	styleUrls: ['./whatsapp-mensagem-enviada-grupo-edit.component.css']
})
export class WhatsappMensagemEnviadaGrupoEditComponent extends WhatsappMensagemEnviadaGrupoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: WhatsappMensagemEnviadaGrupoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem() {
		let novo = new WhatsappMensagemEnviadaGrupo();
		novo.whatsappGrupoId = this.origem.id;
		return novo; 
	}

}
