import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PrecoProdutoAfiliado, PrecoProdutoAfiliadoApi } from '../shared/sdk';
import { PrecoProdutoAfiliadoEditBaseComponent } from './preco-produto-afiliado-edit-base.component';

@Component({
	selector: 'app-preco-produto-afiliado-edit',
  	templateUrl: './preco-produto-afiliado-edit.component.html',
  	styleUrls: ['./preco-produto-afiliado-edit.component.css']
})
export class PrecoProdutoAfiliadoEditComponent extends PrecoProdutoAfiliadoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PrecoProdutoAfiliadoApi
		  ) {
	   super(dialogRef,data,servico);
	}


	criaItem() {
		let novo = new PrecoProdutoAfiliado();
		novo.hotmartId = this.origem.hotmartId;
		return novo;
 	}

}
