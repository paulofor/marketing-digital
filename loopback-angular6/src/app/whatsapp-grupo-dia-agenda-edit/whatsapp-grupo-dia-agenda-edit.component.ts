import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WhatsappGrupoDiaAgenda, WhatsappGrupoDiaAgendaApi } from '../shared/sdk';
import { WhatsappGrupoDiaAgendaEditBaseComponent } from './whatsapp-grupo-dia-agenda-edit-base.component';

@Component({
	selector: 'app-whatsapp-grupo-dia-agenda-edit',
  	templateUrl: './whatsapp-grupo-dia-agenda-edit.component.html',
  	styleUrls: ['./whatsapp-grupo-dia-agenda-edit.component.css']
})
export class WhatsappGrupoDiaAgendaEditComponent extends WhatsappGrupoDiaAgendaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: WhatsappGrupoDiaAgendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): WhatsappGrupoDiaAgenda {
		let novo = new WhatsappGrupoDiaAgenda();
		novo.whatsappGrupoPadraoMensagemId = this.origem.id;
		return novo;
	}

}
