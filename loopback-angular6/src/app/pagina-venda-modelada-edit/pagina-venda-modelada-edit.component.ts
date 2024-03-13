import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PaginaVendaModeladaApi } from '../shared/sdk';
import { PaginaVendaModeladaEditBaseComponent } from './pagina-venda-modelada-edit-base.component';

@Component({
	selector: 'app-pagina-venda-modelada-edit',
  	templateUrl: './pagina-venda-modelada-edit.component.html',
  	styleUrls: ['./pagina-venda-modelada-edit.component.css']
})
export class PaginaVendaModeladaEditComponent extends PaginaVendaModeladaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PaginaVendaModeladaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
