import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CheckoutProdutoProprioApi } from '../shared/sdk';
import { CheckoutProdutoProprioEditBaseComponent } from './checkout-produto-proprio-edit-base.component';
import { CheckoutProdutoProprio } from '../shared/sdk/models/CheckoutProdutoProprio';

@Component({
	selector: 'app-checkout-produto-proprio-edit',
  	templateUrl: './checkout-produto-proprio-edit.component.html',
  	styleUrls: ['./checkout-produto-proprio-edit.component.css']
})
export class CheckoutProdutoProprioEditComponent extends CheckoutProdutoProprioEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: CheckoutProdutoProprioApi
		  ) {
	   super(dialogRef,data,servico);
	}


	criaItem() {
		let saida = new CheckoutProdutoProprio();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}
}
