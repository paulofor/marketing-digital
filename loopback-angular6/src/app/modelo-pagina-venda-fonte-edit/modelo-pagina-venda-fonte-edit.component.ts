import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModeloPaginaVendaApi } from '../shared/sdk';
import { ModeloPaginaVendaFonteEditBaseComponent } from './modelo-pagina-venda-fonte-edit-base.component';

@Component({
	selector: 'app-modelo-pagina-venda-fonte-edit',
  	templateUrl: './modelo-pagina-venda-fonte-edit.component.html',
  	styleUrls: ['./modelo-pagina-venda-fonte-edit.component.css']
})
export class ModeloPaginaVendaFonteEditComponent extends ModeloPaginaVendaFonteEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ModeloPaginaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
