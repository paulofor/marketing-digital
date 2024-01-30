import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IdeiaPalavraChave, IdeiaPalavraChaveApi } from '../shared/sdk';
import { IdeiaPalavraChaveEditBaseComponent } from './ideia-palavra-chave-edit-base.component';

@Component({
	selector: 'app-ideia-palavra-chave-edit',
  	templateUrl: './ideia-palavra-chave-edit.component.html',
  	styleUrls: ['./ideia-palavra-chave-edit.component.css']
})
export class IdeiaPalavraChaveEditComponent extends IdeiaPalavraChaveEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: IdeiaPalavraChaveApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem() {
		let saida = new IdeiaPalavraChave();
		saida.manual = 1;
		saida.maisRecente = 1;
		saida.maisRecenteProduto = 1;
		saida.hotmartId = this.origem.hotmartId;
		return saida;
 }

}
