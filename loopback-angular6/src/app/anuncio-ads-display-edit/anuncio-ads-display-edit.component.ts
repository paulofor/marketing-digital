import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AnuncioAdsDisplayApi } from '../shared/sdk';
import { AnuncioAdsDisplayEditBaseComponent } from './anuncio-ads-display-edit-base.component';

@Component({
	selector: 'app-anuncio-ads-display-edit',
  	templateUrl: './anuncio-ads-display-edit.component.html',
  	styleUrls: ['./anuncio-ads-display-edit.component.css']
})
export class AnuncioAdsDisplayEditComponent extends AnuncioAdsDisplayEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: AnuncioAdsDisplayApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
