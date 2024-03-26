import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DalleSolicitacaoImagem, DalleSolicitacaoImagemApi, ProdutoAfiliadoHotlink } from '../shared/sdk';
import { DalleSolicitacaoImagemEditBaseComponent } from './dalle-solicitacao-imagem-edit-base.component';

@Component({
	selector: 'app-dalle-solicitacao-imagem-edit',
  	templateUrl: './dalle-solicitacao-imagem-edit.component.html',
  	styleUrls: ['./dalle-solicitacao-imagem-edit.component.css']
})
export class DalleSolicitacaoImagemEditComponent extends DalleSolicitacaoImagemEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: DalleSolicitacaoImagemApi
		  ) {
	   super(dialogRef,data,servico);
	}

	criaItem(): DalleSolicitacaoImagem {
		let saida = new DalleSolicitacaoImagem();
		if (this.origem instanceof ProdutoAfiliadoHotlink) {
			saida.hotmartId = this.origem.hotmartId;
		} else {
			saida.produtoProprioId = this.origem.id;
		}
		saida.dimensao = '1024x1792';
		console.log('Critou item ' , saida);
		return saida;
	}

}
