import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PaginaVendaPropriaApi } from '../shared/sdk';
import { PaginaVendaPropriaEditBaseComponent } from './pagina-venda-propria-edit-base.component';

@Component({
	selector: 'app-pagina-venda-propria-edit',
  	templateUrl: './pagina-venda-propria-edit.component.html',
  	styleUrls: ['./pagina-venda-propria-edit.component.css']
})
export class PaginaVendaPropriaEditComponent extends PaginaVendaPropriaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PaginaVendaPropriaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
