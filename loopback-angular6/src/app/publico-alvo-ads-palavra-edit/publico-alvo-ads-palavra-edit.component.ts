import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PublicoAlvoAdsPalavraApi } from '../shared/sdk';
import { PublicoAlvoAdsPalavraEditBaseComponent } from './publico-alvo-ads-palavra-edit-base.component';

@Component({
	selector: 'app-publico-alvo-ads-palavra-edit',
  	templateUrl: './publico-alvo-ads-palavra-edit.component.html',
  	styleUrls: ['./publico-alvo-ads-palavra-edit.component.css']
})
export class PublicoAlvoAdsPalavraEditComponent extends PublicoAlvoAdsPalavraEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PublicoAlvoAdsPalavraApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
