import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContaInstagramApi } from '../shared/sdk';
import { ContaInstagramEditBaseComponent } from './conta-instagram-edit-base.component';

@Component({
	selector: 'app-conta-instagram-edit',
  	templateUrl: './conta-instagram-edit.component.html',
  	styleUrls: ['./conta-instagram-edit.component.css']
})
export class ContaInstagramEditComponent extends ContaInstagramEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ContaInstagramApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
