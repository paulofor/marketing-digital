import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EstruturaPaginaVendaAbertaApi } from '../shared/sdk';
import { EstruturaPaginaVendaAbertaEditBaseComponent } from './estrutura-pagina-venda-aberta-edit-base.component';

@Component({
	selector: 'app-estrutura-pagina-venda-aberta-edit',
  	templateUrl: './estrutura-pagina-venda-aberta-edit.component.html',
  	styleUrls: ['./estrutura-pagina-venda-aberta-edit.component.css']
})
export class EstruturaPaginaVendaAbertaEditComponent extends EstruturaPaginaVendaAbertaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: EstruturaPaginaVendaAbertaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
