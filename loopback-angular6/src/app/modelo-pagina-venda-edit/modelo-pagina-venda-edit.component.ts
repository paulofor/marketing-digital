import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModeloPaginaVendaApi } from '../shared/sdk';
import { ModeloPaginaVendaEditBaseComponent } from './modelo-pagina-venda-edit-base.component';

@Component({
	selector: 'app-modelo-pagina-venda-edit',
  	templateUrl: './modelo-pagina-venda-edit.component.html',
  	styleUrls: ['./modelo-pagina-venda-edit.component.css']
})
export class ModeloPaginaVendaEditComponent extends ModeloPaginaVendaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ModeloPaginaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
