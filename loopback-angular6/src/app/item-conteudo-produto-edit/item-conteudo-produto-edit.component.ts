import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ItemConteudoProdutoApi } from '../shared/sdk';
import { ItemConteudoProdutoEditBaseComponent } from './item-conteudo-produto-edit-base.component';

@Component({
	selector: 'app-item-conteudo-produto-edit',
  	templateUrl: './item-conteudo-produto-edit.component.html',
  	styleUrls: ['./item-conteudo-produto-edit.component.css']
})
export class ItemConteudoProdutoEditComponent extends ItemConteudoProdutoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ItemConteudoProdutoApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
