import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WhatsappGrupo, WhatsappGrupoApi } from '../shared/sdk';
import { WhatsappGrupoEditBaseComponent } from './whatsapp-grupo-edit-base.component';

@Component({
	selector: 'app-whatsapp-grupo-edit',
  	templateUrl: './whatsapp-grupo-edit.component.html',
  	styleUrls: ['./whatsapp-grupo-edit.component.css']
})
export class WhatsappGrupoEditComponent extends WhatsappGrupoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: WhatsappGrupoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): WhatsappGrupo {
		let saida = new WhatsappGrupo();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}

}
