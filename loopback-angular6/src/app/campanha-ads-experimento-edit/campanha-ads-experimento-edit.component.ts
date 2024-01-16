import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CampanhaAdsExperimento, CampanhaAdsExperimentoApi } from '../shared/sdk';
import { CampanhaAdsExperimentoEditBaseComponent } from './campanha-ads-experimento-edit-base.component';

@Component({
	selector: 'app-campanha-ads-experimento-edit',
  	templateUrl: './campanha-ads-experimento-edit.component.html',
  	styleUrls: ['./campanha-ads-experimento-edit.component.css']
})
export class CampanhaAdsExperimentoEditComponent extends CampanhaAdsExperimentoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: CampanhaAdsExperimentoApi
		  ) {
	   super(dialogRef,data,servico);
	}
	criaItem() {
		let saida:CampanhaAdsExperimento = new CampanhaAdsExperimento();
		saida.experimentoModeloId = this.origem.id;
		return saida;
 	}
}
