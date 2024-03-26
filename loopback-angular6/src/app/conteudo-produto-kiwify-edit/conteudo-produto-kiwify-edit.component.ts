import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ConteudoProdutoKiwify, ConteudoProdutoKiwifyApi } from '../shared/sdk';
import { ConteudoProdutoKiwifyEditBaseComponent } from './conteudo-produto-kiwify-edit-base.component';

@Component({
	selector: 'app-conteudo-produto-kiwify-edit',
  	templateUrl: './conteudo-produto-kiwify-edit.component.html',
  	styleUrls: ['./conteudo-produto-kiwify-edit.component.css']
})
export class ConteudoProdutoKiwifyEditComponent extends ConteudoProdutoKiwifyEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ConteudoProdutoKiwifyApi
		  ) {
	   super(dialogRef,data,servico);
	}


	criaItem() {
		let saida = new ConteudoProdutoKiwify();
		saida.entregavelProdutoId = this.origem.id;
		return saida;
	} 
}
