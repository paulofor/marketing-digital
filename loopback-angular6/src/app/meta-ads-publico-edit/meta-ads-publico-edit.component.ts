import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MetaAdsPublico, MetaAdsPublicoApi } from '../shared/sdk';
import { MetaAdsPublicoEditBaseComponent } from './meta-ads-publico-edit-base.component';

@Component({
	selector: 'app-meta-ads-publico-edit',
  	templateUrl: './meta-ads-publico-edit.component.html',
  	styleUrls: ['./meta-ads-publico-edit.component.css']
})
export class MetaAdsPublicoEditComponent extends MetaAdsPublicoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: MetaAdsPublicoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem() {
		let saida = new MetaAdsPublico();
		saida.hotmartId = this.origem.hotmartId;
		return saida;
	}
}
