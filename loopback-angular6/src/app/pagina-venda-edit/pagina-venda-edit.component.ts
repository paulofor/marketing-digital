import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PaginaVendaApi } from '../shared/sdk';
import { PaginaVendaEditBaseComponent } from './pagina-venda-edit-base.component';

@Component({
	selector: 'app-pagina-venda-edit',
  	templateUrl: './pagina-venda-edit.component.html',
  	styleUrls: ['./pagina-venda-edit.component.css']
})
export class PaginaVendaEditComponent extends PaginaVendaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PaginaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
