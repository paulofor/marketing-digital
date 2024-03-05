import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContaGoogle, ContaGoogleApi, ProdutoProprioApi } from '../shared/sdk';
import { ProdutoProprioEditBaseComponent } from './produto-proprio-edit-base.component';

@Component({
	selector: 'app-produto-proprio-edit',
  	templateUrl: './produto-proprio-edit.component.html',
  	styleUrls: ['./produto-proprio-edit.component.css']
})
export class ProdutoProprioEditComponent extends ProdutoProprioEditBaseComponent {

	listaConta:ContaGoogle[];

	constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ProdutoProprioApi, private srvConta:ContaGoogleApi
		  ) {
	   super(dialogRef,data,servico);
	}

	preSubmit() {
		delete this.item['contaGoogle'];
    }

	montaCombos(): void {
		this.srvConta.ListaAtivaCampanha()
			.subscribe((result:ContaGoogle[]) => {
				this.listaConta = result;
			})
	}

}
