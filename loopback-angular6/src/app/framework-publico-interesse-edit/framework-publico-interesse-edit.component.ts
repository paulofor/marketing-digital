import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FrameworkPublicoInteresse, FrameworkPublicoInteresseApi } from '../shared/sdk';
import { FrameworkPublicoInteresseEditBaseComponent } from './framework-publico-interesse-edit-base.component';

@Component({
	selector: 'app-framework-publico-interesse-edit',
  	templateUrl: './framework-publico-interesse-edit.component.html',
  	styleUrls: ['./framework-publico-interesse-edit.component.css']
})
export class FrameworkPublicoInteresseEditComponent extends FrameworkPublicoInteresseEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: FrameworkPublicoInteresseApi
		  ) {
	   super(dialogRef,data,servico);
	}


	criaItem() {
		let saida = new FrameworkPublicoInteresse();
		saida.hotmartId = this.origem.hotmartId;
		return saida;
	}
}
