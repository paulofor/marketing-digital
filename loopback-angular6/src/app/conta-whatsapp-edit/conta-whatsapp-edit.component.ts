import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContaWhatsappApi } from '../shared/sdk';
import { ContaWhatsappEditBaseComponent } from './conta-whatsapp-edit-base.component';

@Component({
	selector: 'app-conta-whatsapp-edit',
  	templateUrl: './conta-whatsapp-edit.component.html',
  	styleUrls: ['./conta-whatsapp-edit.component.css']
})
export class ContaWhatsappEditComponent extends ContaWhatsappEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ContaWhatsappApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
