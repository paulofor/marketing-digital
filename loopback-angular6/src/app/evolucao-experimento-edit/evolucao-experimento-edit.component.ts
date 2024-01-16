import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EvolucaoExperimento, EvolucaoExperimentoApi } from '../shared/sdk';
import { EvolucaoExperimentoEditBaseComponent } from './evolucao-experimento-edit-base.component';

@Component({
	selector: 'app-evolucao-experimento-edit',
  	templateUrl: './evolucao-experimento-edit.component.html',
  	styleUrls: ['./evolucao-experimento-edit.component.css']
})
export class EvolucaoExperimentoEditComponent extends EvolucaoExperimentoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: EvolucaoExperimentoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem() {
		let saida:EvolucaoExperimento = new EvolucaoExperimento();
		saida.experimentoModeloId = this.origem.id;
		return saida;
 	}
}
