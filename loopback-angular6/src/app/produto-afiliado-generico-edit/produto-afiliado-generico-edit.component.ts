import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlataformaVenda, PlataformaVendaApi, ProdutoAfiliadoGenericoApi } from '../shared/sdk';
import { ProdutoAfiliadoGenericoEditBaseComponent } from './produto-afiliado-generico-edit-base.component';

@Component({
	selector: 'app-produto-afiliado-generico-edit',
  	templateUrl: './produto-afiliado-generico-edit.component.html',
  	styleUrls: ['./produto-afiliado-generico-edit.component.css']
})
export class ProdutoAfiliadoGenericoEditComponent extends ProdutoAfiliadoGenericoEditBaseComponent {

	listaPlataforma: PlataformaVenda[];

	 constructor(protected dialogRef: MatDialogRef<any>, private srvPlataforma:PlataformaVendaApi
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ProdutoAfiliadoGenericoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	montaCombos() {
		let filtro = {'order' : 'nome'} 
		this.srvPlataforma.find(filtro)
			.subscribe((lista:PlataformaVenda[])=> {
				console.log('lista:' , lista);
				this.listaPlataforma = lista;
			})
	}

}
