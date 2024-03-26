import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImplementacaoItemEstrutura, ImplementacaoItemEstruturaApi } from '../shared/sdk';
import { ImplementacaoItemEstruturaEditBaseComponent } from './implementacao-item-estrutura-edit-base.component';

@Component({
	selector: 'app-implementacao-item-estrutura-edit',
  	templateUrl: './implementacao-item-estrutura-edit.component.html',
  	styleUrls: ['./implementacao-item-estrutura-edit.component.css']
})
export class ImplementacaoItemEstruturaEditComponent extends ImplementacaoItemEstruturaEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ImplementacaoItemEstruturaApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): ImplementacaoItemEstrutura {
		let saida = new ImplementacaoItemEstrutura();
		saida.itemEstruturaPaginaVendaId = this.origem.id;
		return saida;
	}


}
