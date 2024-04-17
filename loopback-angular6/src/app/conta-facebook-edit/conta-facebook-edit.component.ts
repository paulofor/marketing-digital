import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContaFacebookApi } from '../shared/sdk';
import { ContaFacebookEditBaseComponent } from './conta-facebook-edit-base.component';

@Component({
	selector: 'app-conta-facebook-edit',
  	templateUrl: './conta-facebook-edit.component.html',
  	styleUrls: ['./conta-facebook-edit.component.css']
})
export class ContaFacebookEditComponent extends ContaFacebookEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ContaFacebookApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
