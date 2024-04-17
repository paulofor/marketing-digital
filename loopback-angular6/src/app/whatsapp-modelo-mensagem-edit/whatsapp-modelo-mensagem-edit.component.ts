import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WhatsappModeloMensagem, WhatsappModeloMensagemApi } from '../shared/sdk';
import { WhatsappModeloMensagemEditBaseComponent } from './whatsapp-modelo-mensagem-edit-base.component';

@Component({
	selector: 'app-whatsapp-modelo-mensagem-edit',
  	templateUrl: './whatsapp-modelo-mensagem-edit.component.html',
  	styleUrls: ['./whatsapp-modelo-mensagem-edit.component.css']
})
export class WhatsappModeloMensagemEditComponent extends WhatsappModeloMensagemEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: WhatsappModeloMensagemApi
		  ) {
	   super(dialogRef,data,servico);
	}


	criaItem(): WhatsappModeloMensagem {
		let saida = new WhatsappModeloMensagem();
		saida.whatsappGrupoDiaAgendaId = this.origem.id;
		return saida;
	}
}
