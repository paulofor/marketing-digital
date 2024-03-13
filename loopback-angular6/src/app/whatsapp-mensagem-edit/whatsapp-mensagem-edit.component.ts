import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WhatsappMensagemApi } from '../shared/sdk';
import { WhatsappMensagemEditBaseComponent } from './whatsapp-mensagem-edit-base.component';

@Component({
	selector: 'app-whatsapp-mensagem-edit',
  	templateUrl: './whatsapp-mensagem-edit.component.html',
  	styleUrls: ['./whatsapp-mensagem-edit.component.css']
})
export class WhatsappMensagemEditComponent extends WhatsappMensagemEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: WhatsappMensagemApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
