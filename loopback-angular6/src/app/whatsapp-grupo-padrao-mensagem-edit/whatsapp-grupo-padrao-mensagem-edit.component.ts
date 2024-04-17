import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WhatsappGrupoPadraoMensagem, WhatsappGrupoPadraoMensagemApi } from '../shared/sdk';
import { WhatsappGrupoPadraoMensagemEditBaseComponent } from './whatsapp-grupo-padrao-mensagem-edit-base.component';

@Component({
	selector: 'app-whatsapp-grupo-padrao-mensagem-edit',
  	templateUrl: './whatsapp-grupo-padrao-mensagem-edit.component.html',
  	styleUrls: ['./whatsapp-grupo-padrao-mensagem-edit.component.css']
})
export class WhatsappGrupoPadraoMensagemEditComponent extends WhatsappGrupoPadraoMensagemEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: WhatsappGrupoPadraoMensagemApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): WhatsappGrupoPadraoMensagem {
		let novo = new WhatsappGrupoPadraoMensagem();
		novo.produtoProprioId = this.origem.id;
		return novo;
	}
}
