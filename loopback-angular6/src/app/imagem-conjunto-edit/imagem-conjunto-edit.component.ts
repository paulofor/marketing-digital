import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImagemConjunto, ImagemConjuntoApi, ProdutoAfiliadoHotmart } from '../shared/sdk';
import { ImagemConjuntoEditBaseComponent } from './imagem-conjunto-edit-base.component';
import { BASE_URL } from '../constantes/base.url';
import { FileHolder } from 'angular2-image-upload';

@Component({
	selector: 'app-imagem-conjunto-edit',
  	templateUrl: './imagem-conjunto-edit.component.html',
  	styleUrls: ['./imagem-conjunto-edit.component.css']
})
export class ImagemConjuntoEditComponent extends ImagemConjuntoEditBaseComponent {

	url = BASE_URL + '/api/containers/container1/upload'
	urlImagem =  BASE_URL + '/api/containers/container1/download';

	arquivoSelecionado = null;
	nomeImagemNova:string = '';
  
	// Isso não esta bom alterar (até 04-10-2018)
	nomeArquivoAlterar:string = '';

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ImagemConjuntoApi
		  ) {
	   super(dialogRef,data,servico);
	}
	selectedFile: File | null = null;
	imageUrl: string | ArrayBuffer | null = null;
  
	onUploadFinished(item: FileHolder) {
		console.log('onUploadFinished' , item.file.name);
		this.nomeArquivoAlterar = item.file.name;
	}

	

	onSubmit() {
		this.preSubmit();
	    console.log('Submit(BaseEdit):' , this.item);
	    this.servico.upsert(this.item, (err, obj) => {
	    	if (err) {
	    		console.log("ErroUpsert:" + JSON.stringify(err));
		 	} else {
     		}
    		this.posSubmit();
    	}).subscribe((e: any) => {
    		console.log(JSON.stringify(e));
   			this.closeDialog();
  		});
  	}


	criaItem() {
		let saida = new ImagemConjunto();
		if (this.origem instanceof ProdutoAfiliadoHotmart) {
			saida.hotmartId = this.origem.hotmartId;
		} else {
			saida.produtoProprioId = this.origem.id;
		}
		return saida;
	}
}
