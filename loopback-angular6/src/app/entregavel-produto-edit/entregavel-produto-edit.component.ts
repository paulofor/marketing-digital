import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EntregavelProduto, EntregavelProdutoApi } from '../shared/sdk';
import { EntregavelProdutoEditBaseComponent } from './entregavel-produto-edit-base.component';

@Component({
	selector: 'app-entregavel-produto-edit',
  	templateUrl: './entregavel-produto-edit.component.html',
  	styleUrls: ['./entregavel-produto-edit.component.css']
})
export class EntregavelProdutoEditComponent extends EntregavelProdutoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: EntregavelProdutoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): EntregavelProduto {
		let saida = new EntregavelProduto();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}

}
