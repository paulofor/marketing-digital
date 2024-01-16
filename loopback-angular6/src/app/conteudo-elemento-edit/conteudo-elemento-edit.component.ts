import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ConteudoElemento, ConteudoElementoApi } from '../shared/sdk';
import { ConteudoElementoEditBaseComponent } from './conteudo-elemento-edit-base.component';

@Component({
	selector: 'app-conteudo-elemento-edit',
  	templateUrl: './conteudo-elemento-edit.component.html',
  	styleUrls: ['./conteudo-elemento-edit.component.css']
})
export class ConteudoElementoEditComponent extends ConteudoElementoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ConteudoElementoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	/*
	criaItem(): ConteudoElemento {
		let elemento = new ConteudoElemento();
		elemento.versaoPaginaVendaId = this.origem.versaoPaginaVendaId;
		elemento.elementoModeloPaginaVendaId = this.origem.id;
		return elemento;
	}
	*/

	preSubmit(): void {
		console.log('PreSubmit: ', this.item);
		if (this.item.modeloPaginaVendaId==null) this.item.modeloPaginaVendaId = this.item['modeloPaginaVendaIdOrigem'];
		if (this.item.elementoModeloPaginaVendaId==null) this.item.elementoModeloPaginaVendaId = this.item['elementoModeloPaginaVendaIdOrigem'];
		if (this.item.versaoPaginaVendaId==null) this.item.versaoPaginaVendaId= this.item['versaoPaginaVendaIdOrigem'];
		console.log('Item tratado: ' , this.item);
	}
}
