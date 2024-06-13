import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlataformaVendaApi } from '../shared/sdk';
import { PlataformaVendaEditBaseComponent } from './plataforma-venda-edit-base.component';

@Component({
	selector: 'app-plataforma-venda-edit',
  	templateUrl: './plataforma-venda-edit.component.html',
  	styleUrls: ['./plataforma-venda-edit.component.css']
})
export class PlataformaVendaEditComponent extends PlataformaVendaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PlataformaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
