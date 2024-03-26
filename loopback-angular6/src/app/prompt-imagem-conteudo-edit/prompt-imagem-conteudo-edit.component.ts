import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PromptImagemConteudo, PromptImagemConteudoApi } from '../shared/sdk';
import { PromptImagemConteudoEditBaseComponent } from './prompt-imagem-conteudo-edit-base.component';

@Component({
	selector: 'app-prompt-imagem-conteudo-edit',
  	templateUrl: './prompt-imagem-conteudo-edit.component.html',
  	styleUrls: ['./prompt-imagem-conteudo-edit.component.css']
})
export class PromptImagemConteudoEditComponent extends PromptImagemConteudoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PromptImagemConteudoApi
		  ) {
	   super(dialogRef,data,servico);
	}


	criaItem(): PromptImagemConteudo {
		let saida:PromptImagemConteudo = new PromptImagemConteudo();
		saida.entregavelProdutoId = this.origem.id;
		return saida;
	}

}
