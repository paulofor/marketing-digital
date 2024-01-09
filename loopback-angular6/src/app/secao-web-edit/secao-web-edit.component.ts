import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SecaoWebApi } from '../shared/sdk';
import { SecaoWebEditBaseComponent } from './secao-web-edit-base.component';

@Component({
	selector: 'app-secao-web-edit',
  	templateUrl: './secao-web-edit.component.html',
  	styleUrls: ['./secao-web-edit.component.css']
})
export class SecaoWebEditComponent extends SecaoWebEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: SecaoWebApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
