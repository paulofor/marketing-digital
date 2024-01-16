import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PosicaoElementoPaginaVendaApi } from '../shared/sdk';
import { PosicaoElementoPaginaVendaEditBaseComponent } from './posicao-elemento-pagina-venda-edit-base.component';

@Component({
	selector: 'app-posicao-elemento-pagina-venda-edit',
  	templateUrl: './posicao-elemento-pagina-venda-edit.component.html',
  	styleUrls: ['./posicao-elemento-pagina-venda-edit.component.css']
})
export class PosicaoElementoPaginaVendaEditComponent extends PosicaoElementoPaginaVendaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PosicaoElementoPaginaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
