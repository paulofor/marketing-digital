import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CriativoAnuncio, CriativoAnuncioApi, FonteLocal, FonteLocalApi, ImagemPaginaVenda, ImagemPaginaVendaApi } from '../shared/sdk';
import { CriativoAnuncioEditBaseComponent } from './criativo-anuncio-edit-base.component';

@Component({
	selector: 'app-criativo-anuncio-edit',
  	templateUrl: './criativo-anuncio-edit.component.html',
  	styleUrls: ['./criativo-anuncio-edit.component.css']
})
export class CriativoAnuncioEditComponent extends CriativoAnuncioEditBaseComponent {

	listaImagem:ImagemPaginaVenda[];
	listaFonte:FonteLocal[];

	constructor(protected dialogRef: MatDialogRef<any>, private srvFonte:FonteLocalApi
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: CriativoAnuncioApi, private srvImagem:ImagemPaginaVendaApi
		  ) {
	   super(dialogRef,data,servico);
	}


	criaItem(): CriativoAnuncio {
		let novo = new CriativoAnuncio();
		novo.produtoProprioId = this.origem.id;
		return novo;
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
		delete this.item['imagemPaginaVenda'];
		delete this.item['fonteLocal'];

	}
}
