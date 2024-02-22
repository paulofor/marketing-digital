import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TrechoVsl, TrechoVslApi } from '../shared/sdk';
import { TrechoVslEditBaseComponent } from './trecho-vsl-edit-base.component';

@Component({
	selector: 'app-trecho-vsl-edit',
  	templateUrl: './trecho-vsl-edit.component.html',
  	styleUrls: ['./trecho-vsl-edit.component.css']
})
export class TrechoVslEditComponent extends TrechoVslEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: TrechoVslApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem() {
		let saida = new TrechoVsl();
		saida.videoVslId = this.origem.id;
		return saida;
 	}

}
