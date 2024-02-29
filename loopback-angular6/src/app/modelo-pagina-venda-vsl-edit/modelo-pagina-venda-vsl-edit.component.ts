import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModeloPaginaVendaVslApi } from '../shared/sdk';
import { ModeloPaginaVendaVslEditBaseComponent } from './modelo-pagina-venda-vsl-edit-base.component';

@Component({
	selector: 'app-modelo-pagina-venda-vsl-edit',
  	templateUrl: './modelo-pagina-venda-vsl-edit.component.html',
  	styleUrls: ['./modelo-pagina-venda-vsl-edit.component.css']
})
export class ModeloPaginaVendaVslEditComponent extends ModeloPaginaVendaVslEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ModeloPaginaVendaVslApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
