import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PromptItem, PromptItemApi } from '../shared/sdk';
import { PromptItemEditBaseComponent } from './prompt-item-edit-base.component';

@Component({
	selector: 'app-prompt-item-edit',
  	templateUrl: './prompt-item-edit.component.html',
  	styleUrls: ['./prompt-item-edit.component.css']
})
export class PromptItemEditComponent extends PromptItemEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PromptItemApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): PromptItem {
		let saida:PromptItem = new PromptItem();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}

}
