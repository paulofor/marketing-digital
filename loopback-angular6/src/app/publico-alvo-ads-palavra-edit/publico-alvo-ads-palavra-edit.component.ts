import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContaGoogle, ContaGoogleApi, PublicoAlvoAdsPalavraApi } from '../shared/sdk';
import { PublicoAlvoAdsPalavraEditBaseComponent } from './publico-alvo-ads-palavra-edit-base.component';

@Component({
	selector: 'app-publico-alvo-ads-palavra-edit',
  	templateUrl: './publico-alvo-ads-palavra-edit.component.html',
  	styleUrls: ['./publico-alvo-ads-palavra-edit.component.css']
})
export class PublicoAlvoAdsPalavraEditComponent extends PublicoAlvoAdsPalavraEditBaseComponent {

	listaConta: ContaGoogle[];

	constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PublicoAlvoAdsPalavraApi, private srvConta:ContaGoogleApi
		  ) {
	   super(dialogRef,data,servico);
	}

	montaCombos(): void {
		this.srvConta.ListaAtivaCampanha()
			.subscribe((result:ContaGoogle[]) => {
				this.listaConta = result;
		})
	}

	preSubmit(): void {
		delete this.item['contaGoogle'];
	}

}
