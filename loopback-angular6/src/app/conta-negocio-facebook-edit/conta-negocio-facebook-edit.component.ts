import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContaNegocioFacebookApi } from '../shared/sdk';
import { ContaNegocioFacebookEditBaseComponent } from './conta-negocio-facebook-edit-base.component';

@Component({
	selector: 'app-conta-negocio-facebook-edit',
  	templateUrl: './conta-negocio-facebook-edit.component.html',
  	styleUrls: ['./conta-negocio-facebook-edit.component.css']
})
export class ContaNegocioFacebookEditComponent extends ContaNegocioFacebookEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ContaNegocioFacebookApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
