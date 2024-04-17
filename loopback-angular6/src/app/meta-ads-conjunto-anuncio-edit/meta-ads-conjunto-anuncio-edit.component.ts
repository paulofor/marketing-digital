import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MetaAdsConjuntoAnuncio, MetaAdsConjuntoAnuncioApi } from '../shared/sdk';
import { MetaAdsConjuntoAnuncioEditBaseComponent } from './meta-ads-conjunto-anuncio-edit-base.component';

@Component({
	selector: 'app-meta-ads-conjunto-anuncio-edit',
  	templateUrl: './meta-ads-conjunto-anuncio-edit.component.html',
  	styleUrls: ['./meta-ads-conjunto-anuncio-edit.component.css']
})
export class MetaAdsConjuntoAnuncioEditComponent extends MetaAdsConjuntoAnuncioEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: MetaAdsConjuntoAnuncioApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): MetaAdsConjuntoAnuncio {
		let saida = new MetaAdsConjuntoAnuncio();
		saida.metaAdsCampanhaId = this.origem.id;
		return saida;
	}

}
