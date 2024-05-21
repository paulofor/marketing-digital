import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WhatsappGrupoApi } from '../shared/sdk';
import { WhatsappGrupoEditQtdeBaseComponent } from './whatsapp-grupo-edit-qtde-base.component';

@Component({
	selector: 'app-whatsapp-grupo-edit-qtde',
  	templateUrl: './whatsapp-grupo-edit-qtde.component.html',
  	styleUrls: ['./whatsapp-grupo-edit-qtde.component.css']
})
export class WhatsappGrupoEditQtdeComponent extends WhatsappGrupoEditQtdeBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: WhatsappGrupoApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
