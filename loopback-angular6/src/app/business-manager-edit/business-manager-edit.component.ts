import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BusinessManagerApi } from '../shared/sdk';
import { BusinessManagerEditBaseComponent } from './business-manager-edit-base.component';

@Component({
	selector: 'app-business-manager-edit',
  	templateUrl: './business-manager-edit.component.html',
  	styleUrls: ['./business-manager-edit.component.css']
})
export class BusinessManagerEditComponent extends BusinessManagerEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: BusinessManagerApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
