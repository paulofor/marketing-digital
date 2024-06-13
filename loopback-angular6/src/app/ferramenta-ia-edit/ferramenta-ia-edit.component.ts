import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FerramentaIaApi } from '../shared/sdk';
import { FerramentaIaEditBaseComponent } from './ferramenta-ia-edit-base.component';

@Component({
	selector: 'app-ferramenta-ia-edit',
  	templateUrl: './ferramenta-ia-edit.component.html',
  	styleUrls: ['./ferramenta-ia-edit.component.css']
})
export class FerramentaIaEditComponent extends FerramentaIaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: FerramentaIaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
