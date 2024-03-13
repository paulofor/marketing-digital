import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AgendaCampanhaApi } from '../shared/sdk';
import { AgendaCampanhaEditBaseComponent } from './agenda-campanha-edit-base.component';

@Component({
	selector: 'app-agenda-campanha-edit',
  	templateUrl: './agenda-campanha-edit.component.html',
  	styleUrls: ['./agenda-campanha-edit.component.css']
})
export class AgendaCampanhaEditComponent extends AgendaCampanhaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: AgendaCampanhaApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
