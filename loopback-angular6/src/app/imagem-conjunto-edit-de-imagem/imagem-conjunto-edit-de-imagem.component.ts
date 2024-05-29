import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FonteLocal, FonteLocalApi, ImagemConjunto, ImagemConjuntoApi, ImagemPaginaVenda, ImagemPaginaVendaApi } from '../shared/sdk';
import { ImagemConjuntoEditDeImagemBaseComponent } from './imagem-conjunto-edit-de-imagem-base.component';

@Component({
	selector: 'app-imagem-conjunto-edit-de-imagem',
  	templateUrl: './imagem-conjunto-edit-de-imagem.component.html',
  	styleUrls: ['./imagem-conjunto-edit-de-imagem.component.css']
})
export class ImagemConjuntoEditDeImagemComponent extends ImagemConjuntoEditDeImagemBaseComponent {
	
	listaImagem:ImagemPaginaVenda[];
	listaFonte:FonteLocal[];

	constructor(protected dialogRef: MatDialogRef<any>, private srvFonte:FonteLocalApi
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ImagemConjuntoApi, private srvImagem:ImagemPaginaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}

	montaCombos(): void {
		let filtro = {'where' : {'and' : [{'produtoProprioId' : this.origem.id},{'disponivel' : 1}]}}
		this.srvImagem.find(filtro)
			.subscribe((resultado:ImagemPaginaVenda[]) => {
				this.listaImagem = resultado;
			});
		let filtro2 = {'order' : 'nome'};
		this.srvFonte.find(filtro2)
			.subscribe((resultado:FonteLocal[]) => {
				this.listaFonte = resultado;
			})
		
	}

	preSubmit(): void {
		delete this.item['fonteLocal'];
		delete this.item['imagemPaginaVenda'];

	}

	criaItem() {
		let saida = new ImagemConjunto();
		saida.produtoProprioId = this.origem.id;
		return saida;
	}

}
