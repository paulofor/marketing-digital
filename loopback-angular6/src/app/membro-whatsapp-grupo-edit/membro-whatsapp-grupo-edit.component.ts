import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MembroWhatsappGrupoApi } from '../shared/sdk';
import { MembroWhatsappGrupoEditBaseComponent } from './membro-whatsapp-grupo-edit-base.component';

@Component({
	selector: 'app-membro-whatsapp-grupo-edit',
  	templateUrl: './membro-whatsapp-grupo-edit.component.html',
  	styleUrls: ['./membro-whatsapp-grupo-edit.component.css']
})
export class MembroWhatsappGrupoEditComponent extends MembroWhatsappGrupoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: MembroWhatsappGrupoApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
