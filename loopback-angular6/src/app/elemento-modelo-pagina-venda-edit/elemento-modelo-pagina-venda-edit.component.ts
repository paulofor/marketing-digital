import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ElementoModeloPaginaVendaApi } from '../shared/sdk';
import { ElementoModeloPaginaVendaEditBaseComponent } from './elemento-modelo-pagina-venda-edit-base.component';

@Component({
	selector: 'app-elemento-modelo-pagina-venda-edit',
  	templateUrl: './elemento-modelo-pagina-venda-edit.component.html',
  	styleUrls: ['./elemento-modelo-pagina-venda-edit.component.css']
})
export class ElementoModeloPaginaVendaEditComponent extends ElementoModeloPaginaVendaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ElementoModeloPaginaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
