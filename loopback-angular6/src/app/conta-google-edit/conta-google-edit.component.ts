import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContaGoogleApi } from '../shared/sdk';
import { ContaGoogleEditBaseComponent } from './conta-google-edit-base.component';

@Component({
	selector: 'app-conta-google-edit',
  	templateUrl: './conta-google-edit.component.html',
  	styleUrls: ['./conta-google-edit.component.css']
})
export class ContaGoogleEditComponent extends ContaGoogleEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ContaGoogleApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
