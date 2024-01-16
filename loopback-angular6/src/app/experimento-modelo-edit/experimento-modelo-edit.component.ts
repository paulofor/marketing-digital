import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ExperimentoModeloApi } from '../shared/sdk';
import { ExperimentoModeloEditBaseComponent } from './experimento-modelo-edit-base.component';

@Component({
	selector: 'app-experimento-modelo-edit',
  	templateUrl: './experimento-modelo-edit.component.html',
  	styleUrls: ['./experimento-modelo-edit.component.css']
})
export class ExperimentoModeloEditComponent extends ExperimentoModeloEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ExperimentoModeloApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
