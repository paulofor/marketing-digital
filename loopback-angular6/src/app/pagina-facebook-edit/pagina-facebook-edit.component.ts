import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PaginaFacebookApi } from '../shared/sdk';
import { PaginaFacebookEditBaseComponent } from './pagina-facebook-edit-base.component';

@Component({
	selector: 'app-pagina-facebook-edit',
  	templateUrl: './pagina-facebook-edit.component.html',
  	styleUrls: ['./pagina-facebook-edit.component.css']
})
export class PaginaFacebookEditComponent extends PaginaFacebookEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PaginaFacebookApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
