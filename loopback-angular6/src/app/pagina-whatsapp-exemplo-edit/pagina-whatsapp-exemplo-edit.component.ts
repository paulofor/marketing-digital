import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PaginaWhatsappExemploApi } from '../shared/sdk';
import { PaginaWhatsappExemploEditBaseComponent } from './pagina-whatsapp-exemplo-edit-base.component';

@Component({
	selector: 'app-pagina-whatsapp-exemplo-edit',
  	templateUrl: './pagina-whatsapp-exemplo-edit.component.html',
  	styleUrls: ['./pagina-whatsapp-exemplo-edit.component.css']
})
export class PaginaWhatsappExemploEditComponent extends PaginaWhatsappExemploEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PaginaWhatsappExemploApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
