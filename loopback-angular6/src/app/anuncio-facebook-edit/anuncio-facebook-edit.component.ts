import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MetaAdsAnuncioApi } from '../shared/sdk';
import { AnuncioFacebookEditBaseComponent } from './anuncio-facebook-edit-base.component';

@Component({
	selector: 'app-anuncio-facebook-edit',
  	templateUrl: './anuncio-facebook-edit.component.html',
  	styleUrls: ['./anuncio-facebook-edit.component.css']
})
export class AnuncioFacebookEditComponent extends AnuncioFacebookEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: MetaAdsAnuncioApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
