import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PalavraChaveRaizApi } from '../shared/sdk';
import { PalavraChaveRaizEditBaseComponent } from './palavra-chave-raiz-edit-base.component';

@Component({
	selector: 'app-palavra-chave-raiz-edit',
  	templateUrl: './palavra-chave-raiz-edit.component.html',
  	styleUrls: ['./palavra-chave-raiz-edit.component.css']
})
export class PalavraChaveRaizEditComponent extends PalavraChaveRaizEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PalavraChaveRaizApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
